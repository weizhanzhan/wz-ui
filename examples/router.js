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
console.log(registerRoute())
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component: r => require.ensure([], () => r(require('./views/home/index.vue')))
        },
        {
            path:'/',
            redirect:'/install',
            name:'layout',
            component: r => require.ensure([],() => r(require('./views/layout/index.vue'))),
            children:[
                // {
                //     path:'install',
                //     name:'install',
                //     component: r => require.ensure([],() => r(require('./views/demo/install')))
                // },
                // {
                //     path:'button',
                //     name:'button',
                //     component:r => require.ensure([],() => r(require('./views/demo/button')))
                // },
                // {
                //     path:'icon',
                //     name:'icon',
                //     component:r => require.ensure([],() => r(require('./views/demo/wz-icon/index.md')))
                // }
                ...registerRoute()
            ]
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})
export default router