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
            path:'/aa',
            component:()=>import('./views/layout/index.vue')
        }
    ]
})
export default router