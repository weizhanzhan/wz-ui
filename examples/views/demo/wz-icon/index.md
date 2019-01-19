<style>
    /* .wz-demo button{
        margin: 0 10px !important
    } */
</style>
## Button 按钮
常用的操作按钮。

### 基础用法
:::demo Button 组件 

```html
<template>
    <div>
        <wz-button>普通按钮</wz-button>
        <wz-button type="primary" >主要按钮</wz-button>
        <wz-button type="success">成功按钮</wz-button>
        <wz-button type="warning">警告按钮</wz-button>
        <wz-button type="danger">危险按钮</wz-button>
        <wz-button type="text">TEXT</wz-button>
    </div>
</template>
``` 
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<div>
    <wz-button :loading="true">默认按钮</wz-button>
    <wz-button :loading="true" type="primary" >主要按钮</wz-button>
    <wz-button :loading="true" type="success">成功按钮</wz-button>
</div>
```
:::



### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`small`、`mini`，通过设置`size`属性来配置它们。

```html
<div>
  <wz-button>默认按钮</wz-button>
  <wz-button size="small">小型按钮</wz-button>
  <wz-button size="mini">超小按钮</wz-button>
</div>
```
:::





