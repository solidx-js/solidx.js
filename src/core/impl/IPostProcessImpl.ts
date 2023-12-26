import { PostProcess } from '@babylonjs/core/PostProcesses/postProcess';

export type IPostProcessImpl = {
  entity: PostProcess | null;
  camera: string | null;
};
