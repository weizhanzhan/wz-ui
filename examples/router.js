import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component: r => require.ensure([], () => r(require('./views/home/index.vue')))
        },
        {
            path:'/components',
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
        }
    ]
})
export default router