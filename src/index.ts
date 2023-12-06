/// <reference types="./declarations.d.ts" />

// 加载副作用模块
import '@babylonjs/core/Materials/Textures/Loaders';
import '@babylonjs/core/Animations';
import '@babylonjs/core/Rendering';

// import '@babylonjs/inspector';

import './patch';

export * from './registry';
export * from './core';
