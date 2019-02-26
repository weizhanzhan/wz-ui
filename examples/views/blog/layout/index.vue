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
                <div class="blog-content-title">
                    Latest notes
                </div>
                <div class="blog-list">
                    <div class="list-item" v-for="n in 10" :key="n" @click="app.RouterPush('/blog/'+n)">
                        <div class="blog-list-title">[ javascript ] 原生实现滚动轮播图</div>
                        <div class="blog-list-date">2018-08-08 18:16:55</div>
                    </div>
                </div>
            </div>
            <div class="blog-footer">
                <wz-pagination></wz-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { GetBlogs } from '../../../apis'
export default {
    inject:['app'],
    mounted(){
        GetBlogs(1,4)
    }
}
</script>

<style>
@import "../../../assets/style/blog.css";
</style>
