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

#### Install

Use npm:

```bash
npm install solidx.js
```

Or use CDN:

```html
<script src="https://unpkg.com/solidx.js/dist/index.js"></script>
```

#### Usage

Render a simple box with inline attributes:

```html
<body>
  <xr-scene>
    <xr-camera radius="6" beta="75"></xr-camera>
    <xr-mesh geometry="type: box" material="albedo-color: #ffc069"></xr-mesh>
  </xr-scene>
</body>
```

also you can use CSS to style your mesh:

```html
<body>
  <style>
    .camera {
      ---radius: 6;
      ---beta: 75;
    }
    .box {
      ---geometry: 'type: box';
      ---material: 'albedo-color: #ffc069';
    }
  </style>

  <xr-scene>
    <xr-camera class="camera"></xr-camera>
    <xr-mesh class="box"></xr-mesh>
  </xr-scene>
</body>
```

NOTE:

- Inline attributes have higher priority than CSS variables.
- To distinguish from normal CSS variables, we use `---` instead of `--`."
