<template>
    <div class="wz-tabs">
        <div class="wz-tabs__header">
            <div class="wz-tabs__scroll">
                <div class="wz-tabs__nav">
                    <div 
                        class="wz-tabs__active-bar"
                        :style="[{
                            'transform':`translateX(${left}px)`,
                            'width':width+'px'
                        }]"
                    ></div>
                    <div 
                        class="wz-tabs__item" 
                        v-for="n in 8" :key="n"
                        ref="item"
                        @click="select(n,$event)"
                        >
                        <span ref="tabSpan">tab{{n}}</span>
                    </div>
                  
                </div>
            </div>
        </div>
        <div class="wz-tabs__content">
            {{active}}
        </div>
    </div>
</template>

<script>
export default {
    name:'wz-tab',
    data () {
        return {
            active:0,
            width:0,
            left:0
        }
    },
    methods:{
        select(num){
            /**
             * offsetLeft 元素距离左部的位置 包括内外边距
             */
            let dom = this.$refs.item[num-1]
            let span =  this.$refs.tabSpan[num-1]
            let spanLeft = span.offsetLeft
            this.left = dom.offsetLeft + spanLeft
            var computedStyle = document.defaultView.getComputedStyle(dom, null);
            console.log(computedStyle.offsetLeft,dom.offsetLeft,spanLeft); //"red"
           
            this.width = this.getNodeWidth(dom)
            this.active = num-1
        },
        getStyle(obj, attr) {
          if (obj.currentStyle) {
            return obj.currentStyle[attr];
          } else {
            return document.defaultView.getComputedStyle(obj, null)[attr];
          }
        },
        getNodeWidth(dom){
            let width,padding,paddingTotal
            width = dom.offsetWidth
            padding = this.getStyle(dom, 'padding')

            padding = padding.replace(/px/g,'')
            padding = padding.split(' ')

            paddingTotal = padding.reduce(( acc, cur ) => {
                return parseInt(acc) + parseInt(cur)
            }, 0);
           
           if(padding.length==2) paddingTotal*=2
           if(padding.length==1) paddingTotal*=4
           return  width-paddingTotal
        }
    },
    mounted(){
        let dom = this.$refs.item[0]
        this.width = this.getNodeWidth(dom)
    }
}
</script>

<style scoped>
.wz-tabs__header{
    padding: 0;
    position: relative;
    margin: 0 0 15px;
}
.wz-tabs__scroll{
    overflow: hidden;
}
.wz-tabs__nav{
    white-space: nowrap;
    position: relative;
    transition: transform .3s;
    float: left;
    z-index: 2;
}
.wz-tabs__item{
    padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    cursor: pointer;
}
.wz-tabs__item:nth-child(2){
    padding-left: 0
}
.wz-tabs__active-bar{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #409eff;
    z-index: 1;
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
    width: 50px;
}
.wz-tabs__header{
    overflow: hidden;
    position: relative;
}
</style>
