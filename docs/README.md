# Hello VuePress

::: demo

```html
<xr-engine auto-resize>
  <xr-scene clear-color="#4FC690">
    <xr-camera id="cam1" lock-target="box1"></xr-camera>
    <xr-directional-light id="light1" intensity="3" rotation="40 70"></xr-directional-light>
    <xr-hemispheric-light id="light2" intensity="3" rotation="0 0"></xr-hemispheric-light>

    <xr-material id="m1"></xr-material>
    <xr-geometry id="g1" type="box"></xr-geometry>

    <xr-mesh id="box1" geometry="g1" material="m1"></xr-mesh>
  </xr-scene>
</xr-engine>
```

:::