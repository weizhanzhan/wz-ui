import Vue from 'vue'
import App from './App.vue'
import router from './router'

//高亮markdown代码
import "highlight.js/styles/color-brewer.css";

import VueComponent from './components'
Vue.use(VueComponent)


import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

import './assets/icon/iconfont.css'
import './assets/style/index.css'
// import './assets/style/demo.css'

//全部导入组件库 
import wzUI from '../packages/src/index'
Vue.use(wzUI)
//按需加载
// import { colorPicker } from '../packages/index'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
