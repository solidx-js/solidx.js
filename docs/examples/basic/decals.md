# 贴花

::: demo

```html
<xr-engine auto-resize>
  <xr-scene>
    <xr-camera id="cam1" radius="3" alpha="-115" beta="120"></xr-camera>
    <xr-directional-light id="light1" alpha="-135" intensity="1"></xr-directional-light>
    <xr-hemispheric-light id="light2" intensity="1"></xr-hemispheric-light>

    <xr-material id="m1"></xr-material>
    <xr-geometry id="g1" type="box"></xr-geometry>

    <xr-mesh id="box1" inspect="axes: true; scale: 0.5" geometry="g1" material="m1" rotation="0 0 0" transition="rotation 0.5s ease-in-out">
      <xr-decal
        id="decal-1"
        img="/assets/decal.png"
        img-level="2"
        normal="1 1 1"
        position="-0.5 -0.5 -0.5"
        size="0.8 0.8 1"
        transition="angle 0.5s ease-in-out"
      ></xr-decal>
    </xr-mesh>
  </xr-scene>
</xr-engine>

<script>
  // 旋转 decal-1
  (function () {
    const decal = document.querySelector('#decal-1');

    // 每秒旋转
    let y = 0;

    setInterval(() => {
      y += 90;
      decal.setAttribute('angle', y);
    }, 1000);
  })();
</script>
```

:::
