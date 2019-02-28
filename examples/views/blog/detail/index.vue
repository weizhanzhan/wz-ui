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
                        {{blog.title}}
                    </span>             
                </div>
                <div class="blog-list">
                    
                    <mavon-editor v-model="blog.content" :toolbarsFlag="false"  :subfield="false" defaultOpen="preview" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { GetDetail } from '../../../apis'
export default {
    data(){
        return {
            value:`## test 
            <br>大家好 这是我的技术博客
            <div>hello word</div>
            `,
            blog:null
        }
    },
    mounted(){
        GetDetail(this.$route.params.id)
        .then(res=>{
            console.log(res)
            this.blog = res.data
        })
    }
}
</script>

<style>
@import "../../../assets/style/blog.css";
.v-note-wrapper .v-note-panel.shadow{
    box-shadow: none !important;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html{
    background: #ffffff !important
}
</style>
