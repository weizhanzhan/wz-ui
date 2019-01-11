<template>
    <ul class="layout-component-nav-ul">
        <li class="nav-item">
            <a href="javascript:;">开发指南</a>
            <ul-item ulclass="sub-nav" to="/components/install">安装</ul-item>
        </li>
        <li class="nav-item">
            <a href="javascript:;">组件</a>
            <div class="nav-group">
                <div class="nav-group-title">Basic</div>
                <ul-item ulclass="pure-menu-list" to="/components/button">Button</ul-item>
                <ul-item ulclass="pure-menu-list" to="/components/icon">Icon</ul-item>
            </div>
        </li>
    </ul>
</template>

<script>
import UlItem from '../../../common/ul-item.vue'
export default {
    components:{
        UlItem
    }
}
</script>

<style>

</style>
