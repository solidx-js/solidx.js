# 几何

## Box

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="6" target="0 0.5 0" alpha="0" beta="75"></xr-camera>
  <style>
    .box {
      --material: 'albedo-color: #ffc069; aa: bbb';
    }
  </style>
  <xr-mesh class="box" geometry="type: box" position="0 0.6 0"></xr-mesh>
</xr-scene>
```

:::
