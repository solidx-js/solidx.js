<p align="center">
  <img alt="stencil-logo" src="https://github.com/solidx-js/solidx.js/assets/6647656/67eb9cd2-eb7f-44c1-b090-c1a26b46c8ae" width="100">
</p>

<h1 align="center">
  solidx.js
</h1>

<p align="center">
  A New Way of 3D Programming, using only HTML and CSS.
</p>

<p align="center">
  <img src="https://github.com/solidx-js/solidx.js/actions/workflows/ci.yml/badge.svg" alt="CI" />
  <img src="https://img.shields.io/npm/dw/solidx.js" alt="npm" />
  <img src="https://img.shields.io/npm/v/solidx.js" alt="npm" />
</p>

<p align="center" style="font-weight: bolder; font-size: 1.2em" >
  <a href="https://solidx-js.github.io/solidx-website">Document</a>
</p>

## Core Features

![image](https://github.com/solidx-js/solidx.js/assets/6647656/92193fb9-4343-4137-b95a-ce0e9a86088b)

- **Declarative**: No need to learn a new language, simply use HTML and CSS.
- **Performance**: Powered by [babylon.js](https://www.babylonjs.com/) and [lit](https://lit.dev/).
- **Lightweight**: Code splitting, tree shaking, and lazy loading supported.
- **Extensible**: Create your own components for your scenes.


## Getting Started

### Install

With npm:

```bash
npm install solidx.js --save
```

Or with CDN:

```html
<link rel="stylesheet" href="https://registry.npmmirror.com/solidx.js/2.3.1/files/assets/preset.css" />
<script src="https://registry.npmmirror.com/solidx.js/2.3.1/files/dist/index.js"></script>
```

**NOTE**: If you are *outside of China*, please use BELOW CDN:

- https://cdn.jsdelivr.net/npm/solidx.js/assets/preset.css
- https://cdn.jsdelivr.net/npm/solidx.js/dist/index.js

### Usage

Render a simple box with inline attributes:

```html
<head>
  <link rel="stylesheet" href="https://registry.npmmirror.com/solidx.js/2.3.1/files/assets/preset.css" />
</head>

<body>
  <xr-scene>
    <xr-camera radius="6" beta="75"></xr-camera>
    <xr-mesh geometry="type: box" material="albedo-color: #ffc069"></xr-mesh>
  </xr-scene>

  <script src="https://registry.npmmirror.com/solidx.js/2.3.1/files/dist/index.js"></script>
</body>
```

also you can use CSS to style your mesh:

```html
<head>
  <link rel="stylesheet" href="https://registry.npmmirror.com/solidx.js/2.3.1/files/assets/preset.css" />

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
</head>

<body>
  <xr-scene>
    <xr-camera class="camera"></xr-camera>
    <xr-mesh class="box"></xr-mesh>
  </xr-scene>

  <script src="https://registry.npmmirror.com/solidx.js/2.3.1/files/dist/index.js"></script>
</body>
```

NOTE:

- Inline attributes have higher priority than CSS variables.
- To distinguish from normal CSS variables, we use `---` instead of `--`.

#### via react

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import 'solidx.js/assets/preset.css';
import 'solidx.js';

ReactDOM.render(
  <xr-scene>
    <xr-camera radius='6' beta='75'></xr-camera>
    <xr-mesh geometry='type: box' material='albedo-color: #ffc069'></xr-mesh>
  </xr-scene>,
  document.getElementById('root')
);
```

#### via vue

```vue
<template>
  <xr-scene>
    <xr-camera radius="6" beta="75"></xr-camera>
    <xr-mesh geometry="type: box" material="albedo-color: #ffc069"></xr-mesh>
  </xr-scene>
</template>

<script>
import 'solidx.js/assets/preset.css';
import 'solidx.js';

export default {
  name: 'App',
};
</script>
```
