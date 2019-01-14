import Vue from 'vue'
import App from './App.vue'
import router from './router'

//高亮markdown代码
import "highlight.js/styles/color-brewer.css";

import VueComponent from './components'
Vue.use(VueComponent)

import './assets/icon/iconfont.css'
import './assets/style/index.css'


//全部导入组件库 
import wzUI from '../packages/index'
Vue.use(wzUI)
//按需加载
// import { colorPicker } from '../packages/index'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
