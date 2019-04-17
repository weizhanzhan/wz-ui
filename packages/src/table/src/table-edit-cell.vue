<template>
    <div @mouseenter="mouseenter" @mouseleave="mouseleave" class="edit-cell">
        <template>
            <span v-if="isRead">{{text}}</span>
            <input v-else type="text" :value="text" @input="handleInputChange($event.target.value)">
        </template>

        <i v-if="tigger" :class="['iconfont',isRead?'icon-edit':'icon-yes']" @click="changeRead"></i>
    </div>
</template>

<script>
export default {
    name:'tableEditCell',
    props:{
        text:{
            type:String
        },
        row: Object,
        column: Object,
        index: Number,
    },
    data () {
        return {
            timerEnter:null,
            timerLeave:null,
            tigger:false,
            isRead:true,
            value:''
        }
    },
    methods:{
        mouseenter(params){
            if(this.timerEnter)
                clearTimeout(this.timerEnter)
            this.timerEnter = setTimeout(()=>{
                this.tigger = true
            },200)
        },
        mouseleave(params){
            if(this.timerLeave)
                clearTimeout(this.timerLeave)
            this.timerLeave = setTimeout(()=>{
                this.tigger = false
            },200)
        },
        handleInputChange(val){
            this.value = val
        },
        changeRead(){
            // read为true 展示 编辑图标
            this.isRead = !this.isRead
            if(this.isRead){
                this.$emit('on-cell-change',this.value)
            }
        }
        
    }
}
</script>

<style scoped>
.edit-cell{
    height: 100%;
    width: 100%;
    position: relative;
}
.edit-cell i{
    position: absolute;
    right: 0;
    font-size: 26px;
}
</style>
