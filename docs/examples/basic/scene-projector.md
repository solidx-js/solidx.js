# 屏幕投影

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="6" beta="75"></xr-camera>

  <xr-style selector=".box" geometry="type: box"></xr-style>

  <xr-mesh class="box" id="box1" position="-2 0 0"></xr-mesh>
  <xr-mesh class="box" id="box2" position="0 0 0"></xr-mesh>
  <xr-mesh class="box" id="box3" position="2 0 0"></xr-mesh>

  <xr-scene-projector target="#box1">box1</xr-scene-projector>
  <xr-scene-projector target="#box2">box2</xr-scene-projector>
  <xr-scene-projector target="#box3">box3</xr-scene-projector>
</xr-scene>

<script></script>
```

:::
