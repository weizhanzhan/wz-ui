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
                    <div class="list-item" v-for="(blog,index) in blogs" :key="index" @click="app.RouterPush('/blog/'+blog._id)">
                        <div class="blog-list-title"><span :style="[classifyStyle(blog.classify)]">{{blog.classify}}</span> {{blog.title}}</div>
                        <div class="blog-list-date">2018-08-08 18:16:55</div>
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
export default {
    inject:['app'],
    data(){
        return {
            pageSize:15,
            currentPage:1,
            totalPage:1,
            blogs:[],
        }
    },
    methods:{
        getBlogs(currentPage,pageSize){
            GetBlogs(currentPage,pageSize).then(res=>{
                console.log(res);
                this.blogs = res.data.blogs;
                this.totalPage = res.data.count
            })
        },
        changePage(currentpage){
            this.getBlogs(currentpage,this.pageSize)
        },
        classifyStyle(classify){
            console.log(classify)
            var style = {
                "background":""
            }
            switch(classify){
                case 'Html5':
                    style.background="#1890ff";
                    break;
                case 'Javascript':
                    style.background="#faad14";
                    break;
                case 'Vue.js':
                    style.background="#52c41a";
                    break;
                default:
                    style.background = "#fa541c"
            }
            return style
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
