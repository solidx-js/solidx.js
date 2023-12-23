# 悬停

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="6" beta="75"></xr-camera>

  <style>
    .box {
      --geometry: 'type: box';
    }
    .box[mouse-over] {
      --material: 'albedo-color: #ff0000';
    }
  </style>

  <xr-mesh type="a" class="box" id="box1" position="-2 0 0"></xr-mesh>
  <xr-mesh class="box" id="box2" position="0 0 0"></xr-mesh>
  <xr-mesh class="box" id="box3" position="2 0 0"></xr-mesh>
</xr-scene>

<script></script>
```

:::
