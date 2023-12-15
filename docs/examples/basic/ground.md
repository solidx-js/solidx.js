# 地面

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="6" target="0 0.5 0" beta="75"></xr-camera>
  <xr-mesh id="box1" geometry="type: box" material="albedo-color: #ffc069" position="0 0.6 0"></xr-mesh>
  <xr-ground id="ground"></xr-ground>
</xr-scene>

<script>
  const ani = anime({
    targets: $('#ground').toAttributeObject(),
    size: [3, 10],
    rotation: ['90 0 0', '90 180 0'],
    duration: 5000,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  });

  $disposes.push(ani.pause);
</script>
```

:::
