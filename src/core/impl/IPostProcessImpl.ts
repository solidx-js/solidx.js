import { PostProcess } from '@babylonjs/core/PostProcesses/postProcess';
import { IDataTypeMap } from '../../util';

export type IPostProcessImpl = {
  entity: PostProcess | null;
  camera: IDataTypeMap['URI'] | null;
};
