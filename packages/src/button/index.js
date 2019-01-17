import Button from './src/button.vue'

Button.install = function(Vue){
    Vue.component(Button.name,Button)
}

// 默认导出组件
export default Button