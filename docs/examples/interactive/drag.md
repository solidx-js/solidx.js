# 拖拽变换

::: demo

```html
<xr-scene auto-resize>
  <xr-camera radius="4" beta="75" alpha="-115"></xr-camera>
  <xr-ground></xr-ground>

  <xr-style selector=".box" geometry="type: box"></xr-style>

  <xr-mesh id="root" geometry="type: sphere; diameter: 0.2" material="albedo-color: #CCDFFB">
    <xr-mesh class="box" id="box1" position="-2 0 0"></xr-mesh>
    <xr-mesh class="box" id="box2" position="0 0 1"></xr-mesh>
    <xr-mesh class="box" id="box3" position="2 0 0"></xr-mesh>
  </xr-mesh>

  <xr-dragger target="#root" enable-position enable-rotation enable-scale></xr-dragger>
</xr-scene>

<script>
  $('xr-scene').addEventListener('click', ev => {
    if (ev.target.tagName === 'XR-MESH') {
      $('xr-dragger').target = '#' + ev.target.id;
    }
  });

  $disposes.push(
    anime({
      targets: $('#box1').toAttributeObject(),
      rotation: ['0 0 0', '0 180 0'],
      duration: 2000,
      loop: true,
      easing: 'easeInOutQuad',
      direction: 'alternate',
    }).pause
  );
</script>
```

:::
