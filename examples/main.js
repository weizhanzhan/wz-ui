import Vue from 'vue'
import App from './App.vue'

//全部导入组件库 
import wzUI from '../packages/index'
Vue.use(wzUI)

//按需加载
// import { colorPicker } from '../packages/index'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
