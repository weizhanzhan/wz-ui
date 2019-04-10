import Table from './src/table-render.vue'

Table.install = function (Vue){ 
    Vue.component( Table.name,Table)
} 

export default  Table 