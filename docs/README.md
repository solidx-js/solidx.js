# Hello VuePress

::: demo

```html
<xr-scene auto-resize background="#000000" env-intensity="0.8">
  <style>
    .orth {
      ---color: #666;
    }

    #sun {
      ---rotation: 0 0 0;
      animation: rotate 60s linear infinite;
    }

    #earth {
      ---rotation: 0 0 0;
      animation: rotate 10s linear infinite;
    }

    #mercury {
      ---rotation: 0 0 0;
      animation: rotate 5s linear infinite;
    }

    #venus {
      ---rotation: 0 0 0;
      animation: rotate 8s linear infinite;
    }

    #earth-root {
      ---rotation: 0 0 0;
      animation: rotate 10s linear infinite;
    }

    #mercury-root {
      ---rotation: 0 0 0;
      animation: rotate 5s linear infinite;
    }

    #venus-root {
      ---rotation: 0 0 0;
      animation: rotate 8s linear infinite;
    }

    @keyframes rotate {
      from {
        ---rotation: 0 0 0;
      }
      to {
        ---rotation: 0 360 0;
      }
    }
  </style>

  <xr-camera radius="20" alpha="-35" beta="85" max-z="1000"></xr-camera>
  <xr-volumetric-light source="#sun" excluded="xr-ground xr-mesh" exposure="0.1" weight="0.5" density="1.5"></xr-volumetric-light>

  <xr-ground size="1000"></xr-ground>

  <xr-texture id="earth-tex" url="__VUEPRESS_BASE__1k_earth_daymap.jpg"></xr-texture>
  <xr-texture id="sun-tex" url="__VUEPRESS_BASE__1k_sun.jpg"></xr-texture>
  <xr-texture id="mercury-tex" url="__VUEPRESS_BASE__1k_mercury.jpg"></xr-texture>
  <xr-texture id="venus-tex" url="__VUEPRESS_BASE__1k_venus_surface.jpg"></xr-texture>

  <xr-mesh id="sun" geometry="type: sphere" material="albedo-texture: #sun-tex; unlit: true" scale="-8 8 8"></xr-mesh>
  <xr-point-light position="0 0 0" intensity="1000"></xr-point-light>

  <xr-node id="mercury-root">
    <xr-mesh id="mercury" geometry="type: sphere" material="albedo-texture: #mercury-tex" position="8 0 0" scale="-0.5 0.5 0.5"></xr-mesh>
    <xr-ellipse class="orth" id="mercury-orth" radius-x="8" radius-y="8" rotation="90 0 0"></xr-ellipse>
  </xr-node>

  <xr-node id="venus-root">
    <xr-mesh id="venus" geometry="type: sphere" material="albedo-texture: #venus-tex" position="10 0 0" scale="-0.8 0.8 0.8"></xr-mesh>
    <xr-ellipse class="orth" id="venus-orth" radius-x="10" radius-y="10" rotation="90 0 0"></xr-ellipse>
  </xr-node>

  <xr-node id="earth-root">
    <xr-mesh id="earth" geometry="type: sphere" material="albedo-texture: #earth-tex" position="12 0 0" scale="-1 1 1"></xr-mesh>
    <xr-ellipse class="orth" id="earth-orth" radius-x="12" radius-y="12" rotation="90 0 0"></xr-ellipse>
  </xr-node>
</xr-scene>
```

:::
