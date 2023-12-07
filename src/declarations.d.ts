import type { AssetContainer } from '@babylonjs/core';
import { IBjsEntityType, IEntityType } from './type';
import { TransactionSystem } from './system';

declare module '@babylonjs/core/scene' {
  interface Scene {
    waitFor<T extends IEntityType>(type: T, id: string, abortSignal: AbortSignal): Promise<IBjsEntityType<T>>;
    createVert(arg: { type: 'box' } | { type: 'sphere' } | { type: 'plane' }): VertexData;
    loadModel(url: string, forceExt?: string): Promise<AssetContainer>;
    transactionSystem: TransactionSystem;
  }
}
