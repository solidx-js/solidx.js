import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export type ITransformNodeLikeImpl = {
  entity: TransformNode | null;
  position: Vector3;
  rotation: Vector3;
  quaternion: Quaternion | null;
  scale: Vector3;
  layer: number;
};
