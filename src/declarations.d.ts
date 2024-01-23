import type { AssetContainer, UtilityLayerRenderer, AbstractMesh } from '@babylonjs/core';
import { IDataType, IDataTypeMap } from './util/Schema';
import type { XRElement } from './core/XRElement';

declare module '@babylonjs/core/Engines/engine' {
  interface Engine {
    container: HTMLDivElement;
  }
}

declare module '@babylonjs/core/scene' {
  interface Scene {
    loadModel(url: string, forceExt?: string): Promise<AssetContainer>;
    capture(): Promise<string>;

    defaultUtilityLayer: UtilityLayerRenderer;
    defaultUtilityLayerWithEvents: UtilityLayerRenderer;

    bindingElement: XRElement;
  }
}

declare module '@babylonjs/core/node' {
  interface Node {
    get ID(): string;
  }
}

declare module '@babylonjs/core/Materials/material' {
  interface Material {
    get ID(): string;
  }
}

declare module '@babylonjs/core/Materials/Textures/baseTexture' {
  interface BaseTexture {
    get ID(): string;
  }
}

declare module 'lit' {
  // 扩展 lit 的 property 装饰器
  export interface PropertyDeclaration {
    dType: IDataType;
    initValue: IDataTypeMap[IDataType] | null;
    extra?: {
      min?: number;
      max?: number;
      step?: number;
      enums?: any[];
      hidden?: boolean;
      uriPreset?: Record<
        string, // name
        {
          protocol: string;
          host: string;
          pathname?: string;
          query: Record<string, { dType: IDataType; min?: number; max?: number; step?: number; enums?: any[]; hidden?: boolean }>;
        }
      >;
    };
  }
}

// 扩展 HTMLElementEventMap
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

declare module '*.dds' {
  const value: any;
  export default value;
}
