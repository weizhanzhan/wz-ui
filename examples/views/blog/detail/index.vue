<template>
    <div class="blog-wrapper">
        <div class="blog-container">
            <div class="blog-header">
                <div class="blog-avatar">
                    <img src="../../../assets/logo.png" @click="app.RouterPush('/')" alt="">
                </div>
                <div class="blog-input">
                    <input placeholder="请输入要搜索标题或者标签信息" /><wz-button size="mini" type="primary" ripple>搜索</wz-button>
                </div>
            </div>
            <div class="blog-content">
                <div class="blog-content-title" >
                    <span class="cursor" @click="$router.back(-1)">
                        <i class="iconfont icon-back6"></i>
                        Blog details
                    </span>             
                </div>
                <div class="blog-list">
                    {{$route.params.id}}
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
@import "../../../assets/style/blog.css";
</style>
