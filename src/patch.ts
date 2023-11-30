import { MeshSystem } from './system';

declare module '@babylonjs/core/scene' {
  interface Scene {
    systems: {
      mesh: MeshSystem;
    };
  }
}
