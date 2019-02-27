<template>
    <div class="wz-pagination"> 
        <wz-button size="mini" @click="changePage(-1)"><span class="iconfont icon-paging-left"></span></wz-button>
        <wz-button size="mini" v-for="n in totalNum" :key="n" @click="currentPages=n"  :active="currentPages==n">{{n}}</wz-button>
        <wz-button size="mini" @click="changePage(1)"><span class="iconfont icon-paging-right"></span></wz-button>
    </div>
</template>

<script>
export default {
    props:{
        total:{
            type:Number,
            default:1
        },
        currentPage:{
            type:Number,
            default:1
        },
        pageSize:{
            type:Number,
            default:1
        }
    },
    name:'wzPagination',
    data(){
        return{
            currentPages:1,
           // total:6
        }
    },
    computed:{
        totalNum(){
            return Math.round(this.total/this.pageSize)
        }
    },
    watch:{
        currentPages(){
            this.$emit('changePage',this.currentPages)
        }
    },
    methods:{
        changePage(num){
            this.currentPages+=num
            if(this.currentPages<1)
                this.currentPages = 1
            if(this.currentPages>this.totalNum)
                this.currentPages = this.totalNum    
        }
    }
}
</script>

<style>
.pagination-block{
    display: inline-block;
    
    width: 28px;
    border: 1px solid #1890ff;
    border-radius: 2px;
    text-align: center;
  
    cursor: pointer;
  
    color: #303133;
    font-weight: bold;
    font-size: 13px;
    margin: 0 5px;
        height: 28px;
    line-height: 28px;
}

</style>
