<template>
    <ul :class="[ulclass]">
        <li class="nav-item">
            <router-link :to="path">
               <slot></slot>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    inject:['app'],
    props:["ulclass","to"],
    mounted(){
      
    },
    computed:{
        path(){
            console.log(`${this.app.lang}${this.to}`)
            return `/${this.app.lang}${this.to}`
        }
    }
}
</script>

<style>
.router-link-exact-active{
    color:#1890ff !important
}
</style>
