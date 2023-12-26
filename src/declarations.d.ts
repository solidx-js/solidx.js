import type { AssetContainer, UtilityLayerRenderer, AbstractMesh } from '@babylonjs/core';
import { IDataType, IDataTypeMap } from './util/Schema';

declare module '@babylonjs/core/scene' {
  interface Scene {
    loadModel(url: string, forceExt?: string): Promise<AssetContainer>;
    defaultUtilityLayer: UtilityLayerRenderer;
    defaultUtilityLayerWithEvents: UtilityLayerRenderer;
  }
}

declare module 'lit' {
  // 扩展 lit 的 property 装饰器
  export interface PropertyDeclaration {
    dType: IDataType;
    initValue: IDataTypeMap[IDataType] | null;
  }
}

declare global {
  interface HTMLElementEventMap {
    pick: any;
  }
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.env' {
  const value: any;
  export default value;
}
