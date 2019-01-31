export default {
    '_blog':()=>import('../views/blog/layout'),
    '_detail':()=>import('../views/blog/detail'),
    '_home':()=>import('../views/home/index.vue'),
    '_layout':()=>import('../views/layout/index.vue'),
    'install.en-US':()=>import('../views/demo/install/index.md'),
    'install.zh-CN':()=>import('../views/demo/install/index.md'),
    'button.en-US':()=>import('../views/demo/button/index.vue'),
    'button.zh-CN':()=>import('../views/demo/button/index.md'),
    'icon.en-US':()=>import('../views/demo/wz-icon/index.md'),
    'icon.zh-CN':()=>import('../views/demo/wz-icon/index.md'),

}