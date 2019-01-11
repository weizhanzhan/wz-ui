/* 
   编辑直接绑定v-model
   只做展示绑定v-html
   toolbarsFlag：富文本快捷选项 
*/

<template>
    <mavon-editor v-html="mdPage"  :toolbarsFlag="false" :boxShadow="false" />
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    props:["md-page"],
    components:{
        mavonEditor
    }
}
</script>

<style scoped>
.markdown-body{
    z-index: 1
}
</style>
