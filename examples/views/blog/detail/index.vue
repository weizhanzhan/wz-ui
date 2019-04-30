
<template>
    <div class="all-container">
        <div class="blog-wrapper">
            <Header :scroll="scroll"/>
            <div class="blog-container">
                <div class="blog-list">
                    <div class="blog-list-container" v-if="blog">
                        <div class="list-header cursor"   @click="$router.back(-1)">
                            <i class="iconfont icon-back6"></i>
                            {{blog.title}}
                        </div >
                        <div class="list-content"> 
                             <mavon-editor v-model="blog.content" :toolbarsFlag="false"  :subfield="false" defaultOpen="preview" />
                        </div>
                    </div>
                    <div class="blog-comment-container" style="margin-top:10px;">
                        <div class="list-comment">
                            <div class="comment-title">评论</div>
                            <div class="comment-form">
                                <div class="form-avatar">
                                    <div class="avatar-box"></div>
                                </div>
                                <div class="form-input">
                                    <input type="text" placeholder="请输入评论内容">
                                </div>
                            </div>
                            <div class="comment-list">
                                <div class="comment-item" v-for="n in 5" :key="n">
                                    <div class="item-avatar">
                                        <div class="avatar-box" style="background:url('https://mirror-gold-cdn.xitu.io/1692f72b44b70ceb970?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1');background-size: 100% 100%;"></div>
                                    </div>
                                    <div class="item-info">
                                        <div class="item-info-name"><a>zhanzhan</a>&nbsp;&nbsp; 2019-04-24</div>
                                        <div class="item-info-text">不错！赞一个</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Aside :noHeaderTop="noHeaderTop"/>   
            </div>
        </div>
    </div>
    
</template>

<script>
import Header from '../components/header'
import Aside from '../components/aside'
import { getDetail } from '../../../apis'
import BlogMixin from '../../../mixins/blog.js'
export default {
    mixins:[BlogMixin],
    data(){
        return {
            blog:null,       
        }
    },
    methods:{
        init(){
            this.vloading=true
            getDetail(this.$route.params.id)
            .then(res=>{
        
                this.vloading=false
            
                this.blog = res.data
            })
        }
    },
    components:{ Aside, Header }
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
