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
      
        components: {
            LayoutHeader,
            ComponentNav
        },
     
    }
</script>

<style>
 .layout-component-content section pre {
    line-height: 1.8;
    /* font-family: Menlo,Monaco,Consolas,Courier,monospace; */
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
  }

</style>