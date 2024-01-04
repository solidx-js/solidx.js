import { Material } from '@babylonjs/core/Materials/material';

export type IMaterialImpl = {
  entity: Material | null;
  backFaceCulling: boolean | null;
  wireframe: boolean | null;
  alpha: number | null;
  alphaMode: number | null;
  disableDepthWrite: boolean | null;
  zOffset: number | null;
  sideOrientation: number | null;
  entityDelegated: boolean | null;
};
