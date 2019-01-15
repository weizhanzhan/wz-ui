import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import DocConfig from './docs/docs.config.js'
const routes = []
Object.keys(DocConfig).forEach( lang => {
    
    const navs = DocConfig[lang].nav || []

    // navs.map( n =>{
    //     routes.push({
    //         path:`/${lang}/${n.name}`
    //     })
    // })
  
    navs.forEach( nav =>{

        nav.groups.forEach(group =>{
            const navList = group.list
            navList.forEach( list =>{
                console.log(list)
                routes.push({
                    path:`/${lang}/${list.path}`,
                    meta:{
                        lang,
                        name:list.title
                    }
                })
            })
        })
        
      
    })
    console.log(routes)
})

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
                {
                    path:'install',
                    name:'install',
                    component: r => require.ensure([],() => r(require('./views/demo/install')))
                },
                {
                    path:'button',
                    name:'button',
                    component:r => require.ensure([],() => r(require('./views/demo/button')))
                },
                {
                    path:'icon',
                    name:'icon',
                    component:r => require.ensure([],() => r(require('./views/demo/wz-icon/index.md')))
                }
            ]
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})
export default router