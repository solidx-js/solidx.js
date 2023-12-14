# Box

::: demo

```html
<xr-scene auto-resize inspect>
  <xr-camera id="cam1" radius="6" target="0 0.5 0"></xr-camera>
  <xr-env inspect scale="0.5 0.5 0.5"></xr-env>
  <xr-mesh id="box1" geometry="type: box" material="albedo-color: #ffc069" position="0 0.6 0"></xr-mesh>
</xr-scene>

<script>
  anime({
    targets: $('#box1').toAttributeObject(),
    rotation: ['0 0 0', '0 180 0'],
    duration: 2000,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  });
</script>
```

:::
