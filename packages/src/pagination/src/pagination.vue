<template>
    <div class="wz-pagination">
        <!-- <div class="pagination-block">
            <i class="iconfont icon-paging-left"></i>
        </div>
        <div class="pagination-block">
            1
        </div>
        <div class="pagination-block">
            2
        </div>
        <div class="pagination-block">
            3
        </div>
        <div class="pagination-block">
            ...
        </div>
        <div class="pagination-block">
             <i class="iconfont icon-paging-right"></i>
             
        </div> -->
        <wz-button size="mini"><span class="iconfont icon-paging-left"></span></wz-button>
        <wz-button size="mini" v-for="n in 6" :key="n" @click="pages=n"  :active="pages==n">{{n}}</wz-button>
        <!-- <wz-button size="mini" active>1</wz-button>
        <wz-button size="mini">2</wz-button>
        <wz-button size="mini">3</wz-button>
        <wz-button size="mini">4</wz-button>
        <wz-button size="mini">5</wz-button>
        <wz-button size="mini">···</wz-button>
        <wz-button size="mini">90</wz-button> -->
        <wz-button size="mini"><span class="iconfont icon-paging-right"></span></wz-button>
    </div>
</template>

<script>
export default {
    name:'wzPagination',
    data(){
        return{
            pages:1
        }
    },
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
.pagination-block:hover{
    /* background: #1890ff;
    color: #ffffff; */
}
</style>
