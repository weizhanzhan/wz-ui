<template>
    <div class="all-container">
        <div class="blog-wrapper">
            <Header :scroll="scroll"/>
            <div class="blog-container">
                <div class="blog-list">
                    <div class="blog-list-container">
                        <div class="list-header">
                            博客笔记
                        </div>
                        <ul class="list-wrapper" v-loading="vloading">
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
                <Aside :noHeaderTop="noHeaderTop"/>
            </div>
        </div>
    </div>
    
</template>

<script>
import { getBlogs } from '../../../apis'
import Aside from '../components/aside'
import BlogMixin from '../../../mixins/blog.js'
import Header from '../components/header'
export default {
    inject:['app'],
    mixins:[BlogMixin],
    data(){
        return {
            pageSize:10,
            currentPage:1,
            totalPage:1,
            blogs:[],
            searchBlog:'',
        }
    },
    methods:{
        init(){
            this.vloading = true
            getBlogs(this.currentPage,this.pageSize)
                .then(res=>{
                    this.vloading = false
                    this.blogs = res.data.blogs;
                    this.totalPage = res.data.count
                })
        },
        changePage(){
            this.init()
        }
    },
    computed:{
        filterBlog(){
            return this.blogs.filter(blog =>{
                return blog.title.match(this.searchBlog) 
            })
        }
    },
    components:{ Header, Aside}
}
</script>

<style>
@import "../../../assets/style/blog.css";
</style>
