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
                    <div class="blog-list-container">
                        <div class="list-header">
                            博客笔记
                        </div>
                        <ul class="list-wrapper">
                            <li class="list-item" v-for="(blog,index) in filterBlog" :key="index">
                                <div class="blog-box">
                                      <div class="info-box">
                                          <div class="info-row-meta">{{blog.author}} · {{blog.classify}} · {{_wz.formatDateTime(blog.date)}}</div>
                                          <div class="info-row-title" @click="app.RouterPush('/blog/'+blog._id)">{{blog.title}}</div>
                                          <div class="info-row-action">
                                              <span><i class="iconfont icon-icon-test"></i> {{blog.likes}}</span>
                                              <span><i class="iconfont icon-pinglun2"></i> {{blog.comment.length}}</span>
                                              <span><i class="iconfont icon-fenxiang"></i></span>
                                          </div>
                                      </div>
                                      <div class="img-box">
                                          <img :src="blog.img" width="20" alt="">
                                      </div>
                                </div>
                            </li>
                        </ul>
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
                <!-- <div class="blog-header">
                    <div class="blog-avatar">
                        <img src="../../../assets/logo.png" @click="app.RouterPush('/')" alt="">
                    </div>
                    <div class="blog-input">
                        <input placeholder="请输入要搜索标题或者标签信息" v-model="searchBlog" />
                        <wz-button size="mini" type="primary" ripple>搜索</wz-button>
                    </div>
                </div>
                <div class="blog-content">
                    <div class="blog-content-title">
                        Latest notes
                    </div>
                    <div class="blog-list" v-loading = "vloading">
                        <div class="list-item" v-for="(blog,index) in filterBlog" :key="index" @click="app.RouterPush('/blog/'+blog._id)">
                            <a href=""><img :src="_wz.getTypeUrl(blog.classify)" width="20" alt=""></a>
                            <div class="blog-list-title" >
                                {{blog.title}}
                            </div>
                            <div class="blog-list-date">{{blog.date}}</div>
                        </div>
                    </div>
                </div>
                <div class="blog-footer">
                    <wz-pagination :total="totalPage" :page-size="pageSize" :current-page="currentPage" @changePage="changePage"></wz-pagination>
                </div> -->
            </div>
        </div>
    </div>
    
</template>

<script>
import { GetBlogs } from '../../../apis'
import blogMixin from '../../../mixins/blog.js'
import CssDemo from '../../../components/css-demo'
export default {
    inject:['app'],
    mixins:[blogMixin],
    data(){
        return {
            pageSize:15,
            currentPage:1,
            totalPage:1,
            blogs:[],
            searchBlog:'',
            scroll:false,
            timer:null
        }
    },
    methods:{
        getBlogs(currentPage,pageSize){
            this.vloading = true
            GetBlogs(currentPage,pageSize).then(res=>{
                this.vloading = false
                this.blogs = res.data.blogs;
                this.totalPage = res.data.count
            })
        },
        changePage(currentpage){
            this.getBlogs(currentpage,this.pageSize)
        }
    },
    computed:{
        filterBlog(){
            return this.blogs.filter(blog =>{
                return blog.title.match(this.searchBlog) 
            })
        }
    },
    mounted(){
        this.getBlogs(this.currentPage,this.pageSize)
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

    },
    components:{CssDemo}
}
</script>

<style>
@import "../../../assets/style/blog.css";
</style>
