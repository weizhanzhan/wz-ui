
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

### Ripple 波纹

Button 组件提供material的btn点击效果

:::demo 通过设置`ripple`属性来配置它们。

```html
<div>
    <wz-button type="primary" ripple >主要按钮</wz-button>
    <wz-button type="success" ripple>成功按钮</wz-button>
    <wz-button type="warning" ripple>警告按钮</wz-button>
    <wz-button type="danger" ripple>危险按钮</wz-button>
</div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |

