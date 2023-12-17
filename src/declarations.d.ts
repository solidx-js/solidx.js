import type { AssetContainer, UtilityLayerRenderer, AbstractMesh } from '@babylonjs/core';
import { IBjsEntityType, IEntityType } from './type';
import { IDataType, IDataTypeMap } from './util/Schema';

declare module '@babylonjs/core/scene' {
  interface Scene {
    queryWait<T extends IEntityType>(
      type: T,
      id: string,
      abortSignal: AbortSignal,
      resolve: (target: IBjsEntityType<T>) => any,
      reject: (err: Error) => any
    ): any;
    query<T extends IEntityType>(type: T, id: string): IBjsEntityType<T> | null;

    createVert(arg: { type: 'box' } | { type: 'sphere' } | { type: 'plane' }): VertexData;
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
