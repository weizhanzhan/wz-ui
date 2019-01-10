import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('./views/home/index.vue')
        },
        {
            path:'/components',
            name:'layout',
            component:()=>import('./views/layout/index.vue'),
            children:[
                {
                    path:'button',
                    name:'button',
                    component:()=>import('./views/demo/button')
                }
            ]
        }
    ]
})
export default router