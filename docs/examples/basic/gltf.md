# glTF

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="3" alpha="-135" beta="70"></xr-camera>
  <xr-directional-light id="light1" intensity="3" alpha="-160" inspect="scale: 3"></xr-directional-light>
  <xr-hemispheric-light id="light2" intensity="1"></xr-hemispheric-light>

  <xr-model id="model" src="/assets/DamagedHelmet.glb" rotation="0 180 0"></xr-model>
</xr-scene>

<script>
  anime({
    targets: $('#light1').toAttributeObject(),
    alpha: [0, 360],
    duration: 4000,
    loop: true,
    easing: 'easeInOutQuad',
  });
</script>
```

:::
