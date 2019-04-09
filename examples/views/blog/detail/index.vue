
<template>
    <div class="all-container">
        <div class="blog-wrapper">
            <div class="blog-topnav-wrapper">
                <header :class="['main-header',scroll?'no-header':'']" >
                     <div class="blog-topnav" style="width:100%">
                        <a  href="#home">
                            <img src="../../../assets/logo.png" alt="">
                        </a>                    
                        <ul class="wz-header-nav">
                            <li> <input type="text" placeholder="Search.."></li>
                        
                            <li> <i  class="iconfont icon-git-1"></i></li>
                            <li > <span >Blog</span></li>
                        </ul>
                    </div>
                </header>     
            </div>
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
                        <div class="list-comment">
                            <div class="comment-title">评论</div>
                            <div class="comment-form">
                                <input type="text">
                            </div>
                            <div class="comment-list">
                                <div class="comment-item">
                                    <div class="item-avatar">
                                        <img src="https://user-gold-cdn.xitu.io/2018/12/24/167ddbb478b0a47f?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt="">
                                    </div>
                                    <div class="item-info">
                                        <div class="item-info-name">xxx</div>
                                        <div class="item-info-text">发生发生发生</div>
                                        <div class="item-info-time">2021323</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog-aside">
                   
                    <div class="aside-item">
                        <CssDemo/>
                    </div>
                    <div class="aside-item">
                        <h2>ZhanWei's Blog</h2>
                       
                    </div>
                    
                </div>
          
            </div>
        </div>
    </div>
    
</template>

<script>

import Vue from 'vue';
import { GetDetail } from '../../../apis'
import blogMixin from '../../../mixins/blog.js'
import CssDemo from '../../../components/css-demo'
export default {
    mixins:[blogMixin],
    data(){
        return {
            value:``,
            blog:null,
            scroll:false,
            timer:null
        }
    },
   
    mounted(){
        window.onscroll= () => {
            //变量t是滚动条滚动时，距离顶部的距离
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{//节流
                var t = document.documentElement.scrollTop||document.body.scrollTop;      
                this.scroll = t>300
            },100)
        }
        this.vloading=true
        GetDetail(this.$route.params.id)
        .then(res=>{
       
            this.vloading=false
          
            this.blog = res.data
        })
    },
    components:{CssDemo}
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
