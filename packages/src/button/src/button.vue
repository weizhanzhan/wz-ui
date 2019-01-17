<template>
    <button class="wx-button" :class="[
            size?'wx-button-'+size:'',
            type?'wx-button--'+type:'',     
        ]"
        :style="[]" ref="rippleButton" @click="getFoucs(this)">
        <div class="ripple" :style="[RippleColor]" ref="ripple">
        </div>
        <i class="iconfont icon-loading" v-if="loading"></i>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'wzButton',
        props: {
            ripple: Boolean,
            loading: Boolean,
            disabled: Boolean,
            rippleColor: {
                type: String,
                default () {
                    return 'rgba(255, 255, 255, 0.5)'
                }
            },
            size: {
                type: String,
                default () {
                    return 'normal'
                }
            },
            type: {
                type: String,
                default () {
                    return 'default'
                }
            }
        },
        computed: {
            RippleColor() {
                return {
                    'background': this.rippleColor
                }
            }
        },
        data() {
            return {
                touchState: false
            }
        },

        methods: {
            getFoucs() {
                this.$emit('click', this);

                if (!this.ripple) return;


                const ripples = new Ripple('rippleButton', 'ripple', this, 'touch-scale')

                ripples._init()

            }
        },

    }
    class Ripple {
        constructor(wrapper, item, component, calssName) {
            this.rippleWrapper = component.$refs[wrapper]
            this.rippleItem = component.$refs[item]
            this.calssName = calssName
        }
        _init() {
            this.rippleItem.classList.remove(this.calssName)
            const size = this.GetWrapperSize()
            this.SetWrapperItemSize(size)
            this.SetWrapperItemPosition(size)
        }
        GetWrapperSize() {

            const {
                offsetHeight,
                offsetWidth
            } = this.rippleWrapper

            return Math.max(offsetHeight, offsetWidth)
        }
        SetWrapperItemSize(size) {

            this.rippleItem.style.height = size + 'px';
            this.rippleItem.style.width = size + 'px';
        }
        SetWrapperItemPosition(size) {

            // var rippleX = parseInt(event.pageX - this.rippleWrapper.offsetLeft) - (size / 2);
            // var rippleY = parseInt(event.pageY - this.rippleWrapper.offsetTop) - (size / 2);
            // this.rippleItem.style.top = rippleY + 'px'
            // this.rippleItem.style.left = rippleX +'px'

            //pageX 如果父层定位relative的话 效果会出错，位置偏移 所以用offsetX

            this.rippleItem.style.top = (event.offsetY - (size / 2)) + 'px'

            this.rippleItem.style.left = (event.offsetX - size / 2) + 'px'

            this.rippleItem.classList.add(this.calssName)

        }
    }
</script>

<style scoped>
    .touch-scale {
        animation: ripple 0.6s linear
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5)
        }
    }

    .ripple {
        display: block;
        position: absolute;
        border-radius: 100%;
        transform: scale(0);
        width: 10px;
        height: 10px
    }

    .wx-button {

        display: inline-block;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-color: #dcdfe6;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        font-weight: 400;
        border-radius: 4px;
        position: relative;
        overflow: hidden
    }

    .wx-button i {
        display: inline-block;
        animation: roate 0.5s infinite linear;
        margin-right: 5px
    }

    @keyframes roate {
        0% {
            transform: rotate(180deg)
        }

        100% {
            transform: rotate(360deg)
        }
    }

    .wx-button-normal {
        padding: 12px 20px;
        font-size: 14px;
    }

    .wx-button-small {
        padding: 9px 15px;
        font-size: 13px;
    }

    .wx-button-mini {
        padding: 6px 15px;
        font-size: 12px;
    }

    .wx-button--primary {
        background-color: #1890ff;
        color: #fff;
        border: 0;
    }

    .wx-button--success {
        background-color: #a0d911;
        color: #fff;
        border: 0;
    }

    .wx-button--warning {
        background-color: #fa8c16;
        color: #fff;
        border: 0;
    }

    .wx-button--danger {
        background-color: #f5222d;
        color: #fff;
        border: 0;
    }

    .wx-button--text {
        background: unset;
        color: #000000;
        border: 0;
    }

    .wx-button--text:active {
        background-color: #ffd591
    }
</style>