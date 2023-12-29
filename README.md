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
  <img src="https://github.com/solidx-js/solidx.js/actions/workflows/website.yml/badge.svg" alt="website.yml" />
  <img src="https://img.shields.io/npm/dw/solidx.js" alt="npm" />
  <img src="https://img.shields.io/npm/v/solidx.js" alt="npm" />
</p>

### Core Features

- **Declarative**: No need to learn a new language, just use HTML and CSS.
- **Fast**: Powered by [babylon.js](https://www.babylonjs.com/) and [lit](https://lit.dev/).
- **Lightweight**: Code splitting, tree shaking, and lazy loading are all supported.
- **Extensible**: Create your own components and use them in your scenes.

### Getting Started

- [website](https://solidx-js.github.io/solidx.js/)
- [playground](https://solidx-js.github.io/solidx.js/playground/)

Use npm:

```bash
npm install solidx.js
```

Or use CDN:

```html
<script src="https://unpkg.com/solidx.js/dist/index.js"></script>
```

### Examples

#### Render box and sphere

![image](https://github.com/solidx-js/solidx.js/assets/6647656/9c42a77f-cca4-4d60-b854-abcd476e2b6d)

```html
<script src="https://unpkg.com/solidx.js/dist/index.js"></script>

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
