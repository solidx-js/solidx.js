# xr-geometry 几何体

几何体是三维空间中的实体物体，具有预定义的几何形状和特性。它们可以是简单的形状，如球体、立方体和圆柱体，也可以是复杂的结构，如多面体和曲面。

## 代码示例

### 立方体

::: demo

```html
<xr-scene auto-resize>
  <xr-camera radius="3" alpha="-45" beta="75"></xr-camera>
  <xr-mesh geometry="type: box" material="albedo-color: #ffc069" position="0 0 0"></xr-mesh>
</xr-scene>
```

:::

立方体的尺寸可以通过 `width`、`height`、`depth` 属性进行设置，也可以通过 `size` 属性进行设置。默认情况下，立方体的尺寸为 `1`。

### 球体

::: demo

```html
<xr-scene auto-resize>
  <xr-camera radius="3" beta="75"></xr-camera>
  <xr-mesh geometry="type: sphere" material="albedo-color: #ffc069" position="0 0 0"></xr-mesh>
</xr-scene>
```

:::

球体的尺寸可以通过 `diameter`、`diameter-x`、`diameter-y`、`diameter-z` 属性进行设置。默认情况下，球体的直径为 `1`。

### 圆柱体

::: demo

```html
<xr-scene auto-resize>
  <xr-camera radius="5" beta="75"></xr-camera>
  <xr-mesh geometry="type: cylinder; diameter-top: 0" material="albedo-color: #ffc069" position="-2 0 0"></xr-mesh>
  <xr-mesh geometry="type: cylinder" material="albedo-color: #ffc069" position="0 0 0"></xr-mesh>
  <xr-mesh geometry="type: cylinder; diameter-bottom: 0" material="albedo-color: #ffc069" position="2 0 0"></xr-mesh>
</xr-scene>
```

:::

### 圆环体

::: demo

```html
<xr-scene auto-resize>
  <xr-camera radius="3" beta="75"></xr-camera>
  <xr-mesh geometry="type: torus" material="albedo-color: #ffc069" position="0 0 0"></xr-mesh>
</xr-scene>
```

:::

## API

### 公共属性

| 属性名   | 描述                                     | 类型     | 默认值 |
| -------- | ---------------------------------------- | -------- | ------ |
| **type** | 几何体类型: box, sphere, cylinder, torus | `String` | `box`  |

### 立方体: box

| 属性名     | 描述                                                                                                                      | 类型      | 默认值  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| **size**   | 尺寸                                                                                                                      | `Number`  | `1`     |
| **width**  | 宽度                                                                                                                      | `Number`  | `1`     |
| **height** | 高度                                                                                                                      | `Number`  | `1`     |
| **depth**  | 深度                                                                                                                      | `Number`  | `1`     |
| **wrap**   | 用于决定是否应该 "包装" 立方体的纹理。如果 wrap 参数为 true，那么纹理将会在立方体的每一面上重复，而不是被拉伸以适应整个面 | `Boolean` | `false` |

### 球体: sphere

| 属性名         | 描述  | 类型     | 默认值 |
| -------------- | ----- | -------- | ------ |
| **diameter**   | 直径  | `Number` | `1`    |
| **diameter-x** | 直径X | `Number` | `1`    |
| **diameter-y** | 直径Y | `Number` | `1`    |
| **diameter-z** | 直径Z | `Number` | `1`    |

### 圆柱体: cylinder

| 属性名              | 描述     | 类型     | 默认值 |
| ------------------- | -------- | -------- | ------ |
| **diameter-top**    | 顶部直径 | `Number` | `1`    |
| **diameter-bottom** | 底部直径 | `Number` | `1`    |
| **height**          | 高度     | `Number` | `2`    |
