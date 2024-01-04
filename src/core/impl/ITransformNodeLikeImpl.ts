import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export type ITransformNodeLikeImpl = {
  entity: TransformNode | null;
  position: Vector3 | null;
  rotation: Vector3 | null;
  quaternion: Quaternion | null;
  scale: Vector3 | null;
  layer: number | null;
  entityDelegated: boolean | null;
};
