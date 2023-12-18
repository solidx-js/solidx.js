/// <reference types="./declarations.d.ts" />

// 加载副作用模块
import '@babylonjs/core/Materials/Textures/Loaders';
import '@babylonjs/core/Animations';
import '@babylonjs/core/Rendering';
import '@babylonjs/core/Lights';

import './bootstrap';

// 为了方便使用, 将一些常用的类导出
export { Matrix, Vector2, Vector3, Vector4, Quaternion, Color3, Color4, Plane } from '@babylonjs/core/Maths';

export * from './registry';
export * from './core';
export * from './primitive';
export * from './util';
