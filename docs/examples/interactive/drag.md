# 拖拽

::: demo

```html
<xr-scene auto-resize>
  <xr-camera radius="6" beta="75" alpha="-135"></xr-camera>
  <xr-ground></xr-ground>

  <xr-style selector=".box" geometry="type: box"></xr-style>

  <xr-mesh class="box" id="box1" position="-2 0 0"></xr-mesh>
  <xr-mesh class="box" id="box2" position="0 0 1"></xr-mesh>
  <xr-mesh class="box" id="box3" position="2 0 0"></xr-mesh>

  <xr-dragger target="box1" enable-position></xr-dragger>
</xr-scene>

<script></script>
```

:::
