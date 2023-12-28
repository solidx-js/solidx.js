# Hello VuePress

::: demo

```html
<xr-scene auto-resize background="#000000" env-intensity="0.8">
  <style>
    .orth {
      ---color: #a5b6ca;
    }

    /* @property ---rotation-y {
      syntax: '<number>';
      initial-value: 90;
      inherits: false;
    }

    #sun {
      ---rotation: 0 var(---rotation-y) 0;
    } */
  </style>

  <xr-camera radius="30" alpha="-35" beta="75" max-z="1000"></xr-camera>
  <xr-volumetric-light source="#sun" excluded="xr-ground xr-mesh" exposure="0.1" weight="0.5" density="1.5"></xr-volumetric-light>

  <xr-ground size="1000"></xr-ground>

  <xr-texture id="earth-tex" url="/1k_earth_daymap.jpg"></xr-texture>
  <xr-texture id="sun-tex" url="/1k_sun.jpg"></xr-texture>
  <xr-texture id="mercury-tex" url="/1k_mercury.jpg"></xr-texture>
  <xr-texture id="venus-tex" url="/1k_venus_surface.jpg"></xr-texture>

  <xr-mesh id="sun" geometry="type: sphere" material="albedo-texture: #sun-tex; unlit: true" scale="-10 10 10"></xr-mesh>
  <xr-point-light position="0 0 0" intensity="1000"></xr-point-light>

  <xr-mesh id="earth" geometry="type: sphere" material="albedo-texture: #earth-tex" position="12 0 0" scale="-1 1 1"></xr-mesh>
  <xr-ellipse class="orth" id="earth-orth" radius-x="12" radius-y="12" rotation="90 0 0"></xr-ellipse>

  <xr-mesh id="mercury" geometry="type: sphere" material="albedo-texture: #mercury-tex" position="8 0 0" scale="-0.5 0.5 0.5"></xr-mesh>
  <xr-ellipse class="orth" id="mercury-orth" radius-x="8" radius-y="8" rotation="90 0 0"></xr-ellipse>

  <xr-mesh id="venus" geometry="type: sphere" material="albedo-texture: #venus-tex" position="10 0 0" scale="-0.8 0.8 0.8"></xr-mesh>
</xr-scene>
```

:::
