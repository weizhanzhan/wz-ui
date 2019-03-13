<template>
    <div class="blog-wrapper" >
        <div class="blog-container">
            <div class="blog-header">
                <div class="blog-avatar">
                    <img src="../../../assets/logo.png" @click="app.RouterPush('/')" alt="">
                </div>
                <!-- <div class="blog-input">
                    <input placeholder="请输入要搜索标题或者标签信息" /><wz-button size="mini" type="primary" ripple>搜索</wz-button>
                </div> -->
            </div>
            <div class="blog-content" v-loading="vloading">
                <div class="blog-content-title" >
                    <span class="cursor" @click="$router.back(-1)" v-if="blog">
                        <i class="iconfont icon-back6"></i>
                        {{blog.title}}
                    </span>             
                </div>
                <div class="blog-list" v-if="blog">
                    
                    <mavon-editor v-model="blog.content" :toolbarsFlag="false"  :subfield="false" defaultOpen="preview" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { GetDetail } from '../../../apis'
import blogMixin from '../../../mixins/blog.js'
export default {
    mixins:[blogMixin],
    data(){
        return {
            value:``,
            blog:null,
           
        }
    },
   
    mounted(){
        this.vloading=true
        GetDetail(this.$route.params.id)
        .then(res=>{
       
            this.vloading=false
          
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
@keyframes custom-loading-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.custom-loading {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: hidden;
}

.custom-loading .custom-loading-round {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid purple;
  border-left-color: transparent;
  animation: custom-loading-rotate 1s linear infinite;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
