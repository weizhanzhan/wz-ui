<template>
    <ul :class="[ulclass]">
        <li class="nav-item">
            <router-link :to="to">
               <slot></slot>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props:["ulclass","to"]
}
</script>

<style>
.router-link-exact-active{
    color:#1890ff !important
}
</style>
