
<script> //script只能由一个 所以要把本页面的数据逻辑全写到这个script中 ，下面每一个的demo中的script 只用来展示
    export default {
        data() {
            return {
                activeName:''
            }
        },
        methods:{
        }
    }
</script>
## Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。

### 基础用法
:::demo 基础的、简洁的标签页

```html
<template>
    <wz-tab v-model="activeName">
        <wz-tab-pane label="tab1" name="one">tab1</wz-tab-pane>
        <wz-tab-pane label="tab2" name="two">tab2</wz-tab-pane>
        <wz-tab-pane label="tab3" name="three">tab3</wz-tab-pane>
    </wz-tab>
</template>
``` 
