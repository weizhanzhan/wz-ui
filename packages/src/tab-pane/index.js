import tabPane from '../tabs/src/tab-pane.vue'

tabPane.install = function (Vue){ 
    Vue.component( tabPane.name,tabPane)
} 

export default  tabPane 