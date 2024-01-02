# 贴花

## 贴花在物体表面

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="3" alpha="-70"></xr-camera>

  <xr-mesh id="box1" inspect="axes: true; scale: 0.5" geometry="type: box" material="">
    <xr-decal
      id="decal-1"
      img="__VUEPRESS_BASE__assets/decal.png"
      img-level="2"
      position="0 0 -0.5"
      rotation="0 0 0"
      scale="0.8 0.8 1"
      inspect="axes: false"
    ></xr-decal>
  </xr-mesh>
</xr-scene>

<script>
  $disposes.push(
    anime({
      targets: $('#decal-1').toAttributeObject(),
      rotation: ['0 0 0', '0 0 360'],
      duration: 4000,
      loop: true,
      easing: 'easeInOutQuad',
      direction: 'alternate',
    }).pause
  );
</script>
```

:::

## 实时更新

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="3" alpha="-40"></xr-camera>
  <xr-mesh id="box1" geometry="type: box" material="alpha: 0.3"> </xr-mesh>

  <xr-decal
    id="decal-1"
    img="__VUEPRESS_BASE__assets/decal.png"
    img-level="2"
    position="1 0 0"
    scale="0.8 0.8 1.3"
    use-ray
    inspect="axes: false"
  ></xr-decal>
</xr-scene>

<script>
  (function () {
    const decal = $('#decal-1');

    // 每秒旋转
    let r = 0;

    const timer = setInterval(() => {
      r += 0.01;
      const position = [Math.cos(r) * 0.8, 0, Math.sin(r) * 0.8].join(' ');

      decal.setAttribute('position', position);
      decal.setAttribute('rotation', `0 -${(r * 180) / Math.PI + 90} 0`);
    }, 20);

    $disposes.push(() => clearInterval(timer));
  })();
</script>
```

:::

## 调整位置

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="4" alpha="-40"></xr-camera>
  <xr-mesh id="box1" geometry="type: box" material="alpha: 0.3">
    <xr-decal
      id="decal-1"
      img="__VUEPRESS_BASE__assets/decal.png"
      img-level="2"
      position="0 0 -0.5"
      rotation="0 0 0"
      scale="0.8 0.8 1"
      inspect="axes: false"
    ></xr-decal>
  </xr-mesh>

  <xr-dragger target="#decal-1" enable-position enable-rotation></xr-dragger>
</xr-scene>
```

:::
