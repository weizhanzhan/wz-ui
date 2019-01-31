<template>
    <div class="wz-pagination">
        <div class="pagination-block">
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
             <i class="iconfont icon-paging-left"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'wzPagination'
}
</script>

<style>
.pagination-block{
    display: inline-block;
    height: 28px;
    width: 28px;
    border: 1px solid #1890ff;
    border-radius: 2px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
  
    color: #303133;
    font-weight: bold;
    font-size: 13px;
}
.pagination-block:hover{
    background: #1890ff;
    color: #ffffff;
}
</style>
