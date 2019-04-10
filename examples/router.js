import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import DocConfig from './docs/docs.config.js'
import DemoConfig from './docs/demo.config'

const registerRoute =()=>{
    const routes = []
    Object.keys(DocConfig).forEach( lang => {    
        /**
         * 初始 lang 有三个 base zh en 三个
         */    
        const navs = DocConfig[lang].nav || []  //处理含有nav项的语言路由 ，这里也就是为了排除base 处理en和zh
      
        function AddRoute(pages,langs){    
            let { path } = pages
            if(path){
                path = path.replace('/','') //处理path格式
                const component = DemoConfig[`${path}.${langs}`]     //获取对应component
                routes.push({
                    path:`/${lang}/${path}`,
                    component,
                    meta:{
                        lang,
                        name:pages.title
                    }
                })
            }
        }   

        navs.forEach( nav =>{ //循环 zh和en 处理各项标题节点和标题下的子节点  例如 标题节点：base组件  标题下子节点：button icon 等等
            nav.groups.forEach(group =>{
                const navList = group.list
                navList.forEach( list =>{
                    AddRoute(list,lang)
                })
            })    
        })
    })
    return routes
}
const initRoute = function(){
    const { base } = DocConfig //获取base路由，ui主页和blog等，这里主要是操作ui主页的layout的children，因为组件页都是layout的子路由
    let routes = []
  
    Object.keys(base).forEach(b=>{
        const component = DemoConfig[`_${b}`] ?DemoConfig[`_${b}`]:''  //获取base路由对应的component
        const children = base[b].children?registerRoute():''   // 处理子路由，这里除了ui layout页面是由子路由 ，一般都没有，这里也就是为了处理ui页的子路由，只有layout 的children设置nav值，所以也只是来出来他，详见docs.cinfig.js base各项children值
        routes.push({
            path:base[b].path,
            name:base[b].title,
            redirect:base[b].redirect?base[b].redirect:'',
            component,
            children
        })
    })
    return routes
}
const router = new VueRouter({
    routes:[
        ...initRoute(),
        {
            path:'*',
            redirect:'/'
        }
    ],
    mode:'history'
})
export default router