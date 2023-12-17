# 点选

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="6" beta="75"></xr-camera>

  <xr-style selector=".box" geometry="type: box"></xr-style>
  <xr-style selector=".active" material="albedo-color: #ff0000" inspect></xr-style>

  <xr-mesh class="box" id="box1" position="-2 0 0"></xr-mesh>
  <xr-mesh class="box" id="box2" position="0 0 0"></xr-mesh>
  <xr-mesh class="box" id="box3" position="2 0 0"></xr-mesh>
</xr-scene>

<script>
  const scene = $('xr-scene');

  const _onClick = ev => {
    if (ev.target.tagName === 'XR-MESH') {
      $$('xr-mesh').forEach(_el => {
        if (_el === ev.target) _el.classList.add('active');
        else _el.classList.remove('active');
      });
    }
  };

  scene.addEventListener('click', _onClick);

  $disposes.push(() => scene.removeEventListener('click', _onClick));
</script>
```

:::