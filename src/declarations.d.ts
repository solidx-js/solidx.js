import '@babylonjs/core';
import { MeshSystem, EntitySystem } from './system';
import { IBjsEntityType, IEntityType } from './type';

declare module '@babylonjs/core/scene' {
  interface Scene {
    waitFor<T extends IEntityType>(type: T, id: string, abortSignal: AbortSignal): Promise<IBjsEntityType<T>>;
    createVert(arg: { type: 'box' } | { type: 'sphere' } | { type: 'plane' }): VertexData;
  }
}
