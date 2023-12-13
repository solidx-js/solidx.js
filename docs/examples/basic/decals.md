# 贴花

## 贴花在物体表面

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="3" alpha="-115" beta="120"></xr-camera>
  <xr-directional-light id="light1" alpha="-135" intensity="1"></xr-directional-light>
  <xr-hemispheric-light id="light2" intensity="1"></xr-hemispheric-light>

  <xr-material id="m1"></xr-material>
  <xr-geometry id="g1" type="box"></xr-geometry>

  <xr-mesh id="box1" inspect="axes: true; scale: 0.5" geometry="g1" material="m1">
    <xr-decal
      id="decal-1"
      img="/assets/decal.png"
      img-level="2"
      position="-0.5 -0.5 -0.5"
      direction="1 1 1.01"
      size="0.8 0.8 1"
      inspect
    ></xr-decal>
  </xr-mesh>
</xr-scene>

<script>
  anime({
    targets: $('#decal-1').toAttributeObject(),
    angle: ['0', '360'],
    duration: 4000,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  });
</script>
```

:::

## 实时更新

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="3" alpha="-40"></xr-camera>
  <xr-directional-light id="light1" alpha="-40" intensity="1"></xr-directional-light>
  <xr-hemispheric-light id="light2" intensity="1"></xr-hemispheric-light>

  <xr-material id="m1" alpha="0.3"></xr-material>
  <xr-geometry id="g1" type="box"></xr-geometry>

  <xr-mesh id="box1" geometry="g1" material="m1"> </xr-mesh>
  <xr-decal
    id="decal-1"
    img="/assets/decal.png"
    img-level="2"
    position="1 0 0"
    direction="-1 0 0"
    size="0.8 0.8 1.3"
    use-ray
    inspect
  ></xr-decal>
</xr-scene>

<script>
  (function () {
    const decal = document.querySelector('#decal-1');

    // 每秒旋转
    let r = 0;

    setInterval(() => {
      r += 0.01;
      const position = [Math.cos(r) * 0.8, 0, Math.sin(r) * 0.8].join(' ');
      const direction = [-Math.cos(r), 0, -Math.sin(r)].join(' ');

      decal.setAttribute('position', position);
      decal.setAttribute('direction', direction);
    }, 20);
  })();
</script>
```

:::