import { Material } from '@babylonjs/core/Materials/material';

export type IMaterialImpl = {
  entity: Material | null;
  backFaceCulling: boolean;
  wireframe: boolean;
  alpha: number;
  alphaMode: number;
  disableDepthWrite: boolean;
  zOffset: number;
  sideOrientation: number;
};
