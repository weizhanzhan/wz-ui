<template>
    <div class="blog-wrapper">
        <div class="blog-container">
            <div class="blog-header">
                <div class="blog-avatar">
                    <img src="../../../assets/logo.png" @click="app.RouterPush('/')" alt="">
                </div>
                <div class="blog-input">
                    <input placeholder="请输入要搜索标题或者标签信息" v-model="searchBlog" />
                    <!-- <wz-button size="mini" type="primary" ripple>搜索</wz-button> -->
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
            </div>
        </div>
    </div>
</template>

<script>
import { GetBlogs } from '../../../apis'
import blogMixin from '../../../mixins/blog.js'
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
    }
}
</script>

<style>
@import "../../../assets/style/blog.css";
</style>
