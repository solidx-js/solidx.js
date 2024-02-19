// 加载副作用模块
import '@babylonjs/core/Materials/Textures/Loaders';
import '@babylonjs/core/Animations';
import '@babylonjs/core/Rendering';
import '@babylonjs/core/Lights';

import './builtin';

import './bootstrap';
import { ElementRegistry } from './registry';
import { DefaultBizLogger } from './BizLogger';

// 为了方便使用, 将一些常用的类导出
// export * from '@babylonjs/core/Maths';
// export * from '@babylonjs/core/Loading/sceneLoader';
// export * from '@babylonjs/core/assetContainer';
// export * from '@babylonjs/core/Buffers';
// export * from '@babylonjs/core/Rendering';
// export * from '@babylonjs/core/Meshes';
// export * from '@babylonjs/core/scene';

export * from './Compatibility';
export * from './registry';
export * from './core';
export * from './primitive';
export * from './util';
export * from './AssetsURLs';

// 注册所有元素到 customElements
if (typeof window !== 'undefined') {
  DefaultBizLogger.info('bootstrapping...');
  DefaultBizLogger.info('- NODE_ENV: %s', process.env.NODE_ENV);

  ElementRegistry.Instance.apply();
}
