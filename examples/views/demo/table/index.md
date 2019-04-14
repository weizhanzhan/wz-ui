<script> //script只能由一个 所以要把本页面的数据逻辑全写到这个script中 ，下面每一个的demo中的script 只用来展示
    export default {
        data() {
            return {
                columns: [
                    {
                        title: '姓名',
                        key: 'name',
                        scopedSlots: { customRender: 'name' },
                    },
                    {
                        title: '年龄',
                        key: 'age',
                    },
                    {
                        title: '出生日期',
                        key: 'birthday',
                        render: (h, { row,  column,  index }) => {
                            const date = new Date(parseInt(row.birthday));
                            const year = date.getFullYear();
                            const month = date.getMonth() + 1;
                            const day = date.getDate();
                            const birthday = `${year}-${month}-${day}`;
                            return h('span', birthday);
                        }
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                      
                    }
                ],
                 columns2: [
                    {
                        title: '姓名',
                        key: 'name',
                        scopedSlots: { customRender: 'name' },
                    },
                    {
                        title: '年龄',
                        key: 'age',
                    },
                    {
                        title: '出生日期',
                        key: 'birthday',
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                      
                    }
                ],
                data: [{
                        name: '王小明',
                        age: 18,
                        birthday: '919526400000',
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        birthday: '696096000000',
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        birthday: '563472000000',
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        birthday: '687024000000',
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        methods:{
            onCellChange(row,col,index){
                console.log(row,col,index)
            }
        }
    }
</script>
## Table 表格
常用的表格组件。

### 基础用法
:::demo Table 组件

```html
<template>
    <div>
        <wz-table :columns="columns" :data="data">    
            <a href="#" slot="name" slot-scope="{ text }">{{text}}</a>
        </wz-ta>
    </div>
</template>
<script >
    export default {
        data() {
            return {
                columns: [
                    {
                        title: '姓名',
                        key: 'name',
                        scopedSlots: { customRender: 'name' },
                    },
                    {
                        title: '年龄',
                        key: 'age',
                    },
                    {
                        title: '出生日期',
                        key: 'birthday',
                        render: (h, { row,  column,  index }) => {
                            const date = new Date(parseInt(row.birthday));
                            const year = date.getFullYear();
                            const month = date.getMonth() + 1;
                            const day = date.getDate();
                            const birthday = `${year}-${month}-${day}`;
                            return h('span', birthday);
                        }
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                      
                    }
                ],
                data: [{
                        name: '王小明',
                        age: 18,
                        birthday: '919526400000',
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        birthday: '696096000000',
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        birthday: '563472000000',
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        birthday: '687024000000',
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
```
:::

### 进阶用法
:::demo Table1 组件

```html
<template>
    <div>
        <wz-table :columns="columns2" :data="data"> 
            <template slot="name" slot-scope="{text}">
                <table-edit-cell :text="text" @on-cell-change="onCellChange" />
            </template>
            
        </wz-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columns2: [
                    {
                        title: '姓名',
                        key: 'name',
                        scopedSlots: { customRender: 'name' },
                    },
                    {
                        title: '年龄',
                        key: 'age',
                    },
                    {
                        title: '出生日期',
                        key: 'birthday',
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                      
                    }
                ],
                data: [{
                        name: '王小明',
                        age: 18,
                        birthday: '919526400000',
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        birthday: '696096000000',
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        birthday: '563472000000',
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        birthday: '687024000000',
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
         methods:{
            onCellChange(row,col,index){
                console.log(row,col,index)
            }
        }
    }
</script>
```
:::