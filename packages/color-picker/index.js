// 导入组件，组件必须声明 name
import colorPicker from './src/color-picker.vue'

colorPicker.install = function(Vue){
    Vue.component(colorPicker.name,colorPicker)
}

// 默认导出组件
export default colorPicker