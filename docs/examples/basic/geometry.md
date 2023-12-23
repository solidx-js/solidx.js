# 几何

## 立方体

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="6" beta="75"></xr-camera>
  <style>
    .box {
      --geometry: 'type: box';
      --material: 'albedo-color: #ffc069';
    }
  </style>
  <xr-mesh class="box" position="-2 0 0" scale="0.5 2 0.5"></xr-mesh>
  <xr-mesh class="box" position="0 0 0"></xr-mesh>
  <xr-mesh class="box" position="2 0 0" scale="1.5 0.5 1"></xr-mesh>
</xr-scene>
```

:::

## 球体

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="6" beta="75"></xr-camera>
  <style>
    .sphere {
      --geometry: 'type: sphere';
      --material: 'albedo-color: #ffc069';
    }
  </style>
  <xr-mesh class="sphere" position="-2 0 0" scale="0.5 2 0.5"></xr-mesh>
  <xr-mesh class="sphere" position="0 0 0"></xr-mesh>
  <xr-mesh class="sphere" position="2 0 0" scale="1.5 0.5 1"></xr-mesh>
</xr-scene>
```
