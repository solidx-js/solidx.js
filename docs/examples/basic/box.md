# Box

::: demo

```html
<xr-scene auto-resize>
  <xr-camera id="cam1" radius="3" alpha="-135" beta="70"></xr-camera>
  <xr-directional-light id="light1" intensity="1"></xr-directional-light>
  <xr-hemispheric-light id="light2" intensity="1"></xr-hemispheric-light>

  <xr-material id="m1" albedo-color="#ff0000"></xr-material>
  <xr-geometry id="g1" type="box"></xr-geometry>

  <xr-mesh id="box1" geometry="g1" material="m1" inspect="axes: true"></xr-mesh>
</xr-scene>
```

:::
