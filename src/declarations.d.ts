import type { AssetContainer } from '@babylonjs/core';
import { IBjsEntityType, IEntityType } from './type';
import { TransactionSystem } from './system';

declare module '@babylonjs/core/scene' {
  interface Scene {
    waitFor<T extends IEntityType>(
      type: T,
      id: string,
      abortSignal: AbortSignal,
      resolve: (target: IBjsEntityType<T>) => any,
      reject: (err: Error) => any
    ): any;
    createVert(arg: { type: 'box' } | { type: 'sphere' } | { type: 'plane' }): VertexData;
    loadModel(url: string, forceExt?: string): Promise<AssetContainer>;
  }
}

declare global {
  interface HTMLElementEventMap {
    pick: any;
  }
}
