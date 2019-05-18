// 导入颜色选择器组件
import colorPicker from './color-picker'
import Button from './button'
import Pagination from './pagination'
import Table from './table';
import TableEditCell from './table/edit'
import Tabs from './tabs/index.js'
import TabPane from './tab-pane'
import Vloading from './v-loading'

// 存储组件列表
const components = [
    colorPicker,
    Button,
    Pagination,
    Table,
    TableEditCell,
    Tabs,
    TabPane

]


// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

const install = function (Vue){
    
   
    //判断是否安装
    if(install.installed) return
    
    //遍历注册全局组件
    components.map(component => Vue.component(component.name,component))

    //注册全局钩子
    Vue.use(Vloading)
}

//判断是否是直接引入文件

if(typeof window !== 'undefined' && window.Vue) {
    install(window.vue)
}


export { //按需导入
    install,
    colorPicker,
    Button,
    Pagination,
    Table,
    Tabs
}
export default { //全部导入
    install
}