//路由对应的components组件
export default {
    '_blog':()=>import('../views/blog/layout'),
    '_detail':()=>import('../views/blog/detail'),
    '_home':()=>import('../views/home/index.vue'),
    '_layout':()=>import('../views/layout/index.vue'),
    'install.en-US':()=>import('../views/demo/install/index.md'),
    'install.zh-CN':()=>import('../views/demo/install/index.md'),
    'button.en-US':()=>import('../views/demo/button/index.md'),
    'button.zh-CN':()=>import('../views/demo/button/index.md'),
    'icon.en-US':()=>import('../views/demo/icon/index.md'),
    'icon.zh-CN':()=>import('../views/demo/icon/index.md'),
    'table.en-US':()=>import('../views/demo/table/index.md'),
    'table.zh-CN':()=>import('../views/demo/table/index.md'),
    'tabs.en-US':()=>import('../views/demo/tabs/index.md'),
    'tabs.zh-CN':()=>import('../views/demo/tabs/index.md')
}