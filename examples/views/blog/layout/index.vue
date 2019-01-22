<template>
    <div class="blog-wrapper">
        <div class="blog-container">
            <div class="blog-header">
                <div class="blog-avatar">
                    <img src="../../../assets/logo.png" alt="">
                </div>
                <div class="blog-input">
                    <input placeholder="请输入要搜索标题或者标签信息" /><wz-button size="mini" type="primary" ripple>搜索</wz-button>
                </div>
            </div>
            <div class="blog-content">
                <div class="blog-content-title">最新笔记</div>
                <div class="blog-list">
                    <div class="list-item" v-for="n in 10">
                        <div class="blog-list-title">[ javascript ] 原生实现滚动轮播图</div>
                        <div class="blog-list-date">2018-08-08 18:16:55</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.blog-wrapper{
    height:100vh;
    background: #f2f2f2
}
.blog-container{
    width: 1140px;
    margin: auto;
    min-height: 100%;
  
}
.blog-avatar{
    text-align: center
}
.blog-avatar img{
    width: 150px;
}
.blog-input{
    text-align: center;
    padding: 20px 0 0 0
}
.blog-input input{
  
    padding: 6px;
    width: 300px;
    height: 20px;
    border: 1px solid #f1f1f1;
    margin-right: 16px;
    outline:none;
    outline-color: #2196F3;
    border-radius: 2px;

}
.blog-input input:focus{
     border:1px solid #1890ff;
}
.blog-content{
    width: 800px;
    margin: auto;
    background: #ffffff;
    min-height: 70vh;
    margin-top: 10px;
    box-shadow: 0 2px 8px #d8d8d8;
}
.blog-content-title{
    font-size: 18px;
    color: #1890ff;
    padding-top: 5px;
    padding-left: 20px;
    position: relative;
}
.blog-content-title::before{
    content: '';
    width:4px;
    height: 100%;
    background:#1890ff;
    position: absolute;
    top: 0;
    left: 0;
  
}
.blog-list{
    padding: 20px
}
.list-item{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1
}
.list-item:hover{
    background: #f2f2f2;
    cursor: pointer;
}
.blog-list-title{
    flex: 0 0 600px
}

</style>
