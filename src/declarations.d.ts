import '@babylonjs/core';
import { MeshSystem, EntitySystem } from './system';

declare module '@babylonjs/core/scene' {
  interface Scene {
    systems: {
      mesh: MeshSystem;
      entity: EntitySystem;
    };
  }
}
