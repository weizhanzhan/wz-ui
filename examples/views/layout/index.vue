<template>
    <div class="layout">
        <layout-header></layout-header>
        <div class="layout-content">
            <div class="layout-content-view">
                <div class="layout-component-nav">
                    <component-nav></component-nav>
                </div>
                <div class="layout-component-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LayoutHeader from './header/index'
import ComponentNav from './component-nav/index'
export default {
    components:{
        LayoutHeader,
        ComponentNav
    }
}
</script>

<style>


</style>
