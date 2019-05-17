<template>
    <button 
        class="wz-button" 
        :class="[
            size?'wz-button-'+size:'',
            type?'wz-button--'+type:'',
            active?'wz-button-active':''
        ]"
        :style="[
            disabled?disabledStyle:'',
            loading&&!disabled?loadingStyle:''
        ]" 
        ref="rippleButton" 
        @click="getFoucs(this)">
        <div class="ripple" :style="[RippleColor]" ref="ripple"> </div>
        <i class="iconfont icon-loading" v-if="loading"></i>
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
 
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
            // this.rippleItem.style.left = rippleX + 'px'

            //pageX 如果父层定位relative的话 效果会出错，位置偏移 所以用offsetX

            this.rippleItem.style.top = (event.offsetY - (size / 2)) + 'px'

            this.rippleItem.style.left = (event.offsetX - size / 2) + 'px'

            this.rippleItem.classList.add(this.calssName)
        }
    }
    export default {
        name: 'wzButton',
        props: {
            ripple: Boolean,
            loading: Boolean,
            disabled: {
                type:Boolean,
                default(){
                    return false
                }
            },
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
            },
            active:{
                type:Boolean,
                default(){
                    return false
                }
            }
        },
        computed: {
            RippleColor() {
                return {
                    'background': this.rippleColor
                }
            },
            disabledStyle(){
                return {
                    'background':'#eee',
                    'border':'1px solid #eee'
                }
            },
            loadingStyle(){
                 return {
                    'opacity':'0.5',
                    
                }
            }
        },
        methods: {
            getFoucs() {
                if(this.disabled) return

                this.$emit('click', this);

                if (!this.ripple) return;

                const ripples = new Ripple('rippleButton', 'ripple', this, 'touch-scale')

                ripples._init()
            }
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

    .wz-button {
        
        display: inline-block;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
         border: 1px solid #dcdfe6;
        /* border: 1px solid #dcdfe6; */
        /* border: none; */
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        font-weight: 400;
        border-radius: 4px;
        font-size: 16px;
        position: relative;
        overflow: hidden;
      
    }
    .wz-button:hover{
        opacity: 0.8;
    }
    .wz-button+.wz-button{
        margin-left: 10px
    }
    .wz-button i {
        display: inline-block;
        animation: roate 2s infinite linear;
        margin-right: 5px  ;
        font-size: 14px
    }
    .wz-button img{
        width: 16px;
        animation: roate 2s linear infinite;

    }

    .wz-button-active{
        background: #1890ff;
        color: #ffffff
    }

    @keyframes roate {

        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    .wz-button-normal {
        /* padding: 10px 20px; */
        font-size: 14px;
        height: 34px;
        line-height: 2;
    }

    .wz-button-small {
        /* padding: 8px 15px; */
        font-size: 12px;
        height: 30px;
    }
    .wz-button-small i {
        font-size: 13px
    }

    .wz-button-mini {
        /* padding: 6px 10px; */
        font-size: 10px;
        height: 25px;
        line-height: 1
    }
    .wz-button-mini i{
        font-size: 12px
    }

    .wz-button--primary {
        background-color: #1890ff;
        /* border: 1px solid #1890ff; */
        color: #fff;
        border:none
      
    }

    .wz-button--success {
        background-color: #a0d911;
        /* border: 1px solid #a0d911; */
        color: #fff;
        border:none
      
    }

    .wz-button--warning {
        background-color: #fa8c16;
        /* border: 1px solid #fa8c16; */
        color: #fff;
        border:none
     
    }

    .wz-button--danger {
        background-color: #f5222d;
        /* border: 1px solid #f5222d; */
        color: #fff;
        border:none
      
    }

    .wz-button--text {
        background: unset;
        color: #000000;
      
    }

    .wz-button--text:active {
        background-color: #ffd591
    }

</style>