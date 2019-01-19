import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import DocConfig from './docs/docs.config.js'
import DemoConfig from './docs/demo.config'

const registerRoute =()=>{
    const routes = []
    Object.keys(DocConfig).forEach( lang => {        
        const navs = DocConfig[lang].nav || []
        function AddRoute(pages,langs){    
            let { path } = pages
            if(path){
                path = path.replace('/','')
                const component = DemoConfig[`${path}.${langs}`]     
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
        navs.forEach( nav =>{
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
    const { base } = DocConfig
    let routes = []
    Object.keys(base).forEach(b=>{
        const component = DemoConfig[`_${b}`] ?DemoConfig[`_${b}`]:'' 
        const children = base[b].children?registerRoute():''   
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
    ]
})
export default router