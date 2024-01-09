// 加载副作用模块
import '@babylonjs/core/Materials/Textures/Loaders';
import '@babylonjs/core/Animations';
import '@babylonjs/core/Rendering';
import '@babylonjs/core/Lights';

import './bootstrap';

// 为了方便使用, 将一些常用的类导出
export * from '@babylonjs/core/Maths';
export * from '@babylonjs/core/Loading/sceneLoader';
export * from '@babylonjs/core/assetContainer';
export * from '@babylonjs/core/Buffers';
export * from '@babylonjs/core/Rendering';
export * from '@babylonjs/core/Meshes';
export * from '@babylonjs/core/scene';

export * from './Compatibility';
export * from './registry';
export * from './core';
export * from './primitive';
export * from './util';
export * from './AssetsURLs';
