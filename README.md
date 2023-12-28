<p align="center">
  <img alt="stencil-logo" src="https://github.com/solidx-js/solidx.js/assets/6647656/67eb9cd2-eb7f-44c1-b090-c1a26b46c8ae" width="100">
</p>

<h1 align="center">
  solidx.js
</h1>

<p align="center">
  A New Way of 3D Programming, just with HTML and CSS.
</p>

<p align="center">
  <img src="https://github.com/solidx-js/solidx.js/actions/workflows/ci.yml/badge.svg" alt="CI" />
  <img src="https://img.shields.io/npm/dw/solidx.js" alt="npm" />
  <img src="https://img.shields.io/npm/v/solidx.js" alt="npm" />
</p>

### Examples

#### Render box and sphere

![image](https://github.com/solidx-js/solidx.js/assets/6647656/9c42a77f-cca4-4d60-b854-abcd476e2b6d)

```html
<script src="https://unpkg.com/solidx.js@2.0.1/dist/index.js"></script>

<xr-scene>
  <xr-camera radius="6" beta="75"></xr-camera>
  <style>
    .box {
      ---geometry: 'type: box';
    }
    .sphere {
      ---geometry: 'type: sphere';
    }
    .box,
    .sphere {
      ---material: 'albedo-color: #ffc069';
    }
  </style>
  <xr-mesh class="box" position="-2 0 0"></xr-mesh>
  <xr-mesh class="sphere" position="2 0 0"></xr-mesh>
</xr-scene>
```

Try in live: https://codepen.io/concefly/full/VwRLbbE
