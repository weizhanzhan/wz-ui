<style>
    .wz-demo button{
        margin: 0 10px !important
    }
</style>

:::demo ### Button 组件 
```html
<template>
    <div class="wz-demo">
        <h3>size</h3>
        <wz-button>normal</wz-button>
        <wz-button size="small">small</wz-button>
        <wz-button size="mini">mini</wz-button>
    </div>
    <div class="wz-demo">
        <h3>loading</h3>
        <wz-button :loading="true">normal</wz-button>
        <wz-button :loading="true" size="small">small</wz-button>
        <wz-button :loading="true" size="mini">mini</wz-button>
    </div>
    <div class="wz-demo">
        <h3>type</h3>
        <wz-button type="primary" >normal</wz-button>
        <wz-button type="success">small</wz-button>
        <wz-button type="warning">small</wz-button>
        <wz-button type="danger">small</wz-button>
        <wz-button type="text">mini</wz-button>
    </div>
    <div class="wz-demo">
        <h3>rippe</h3>
        <wz-button type="primary" ripple style="position:relative" >normal</wz-button>
        <wz-button type="success" ripple>small</wz-button>
        <wz-button type="warning" ripple>small</wz-button>
        <wz-button type="danger" ripple>small</wz-button>
        <wz-button type="text" ripple>mini</wz-button>
    </div>
</template>

``` 
:::