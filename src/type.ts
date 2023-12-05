import type { TransformNode } from '@babylonjs/core';
import type { Material } from '@babylonjs/core/Materials/material';
import type { Geometry } from '@babylonjs/core/Meshes/geometry';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';

export type IEntityType = 'mesh' | 'material' | 'geometry' | 'animation' | 'transformNode' | 'transformNodeLike';

export type IIBjsEntityMap = {
  mesh: Mesh;
  material: Material;
  geometry: Geometry;
  animation: Animation;
  transformNode: TransformNode;
  transformNodeLike: Mesh | TransformNode;
};

export type IBjsEntityType<T extends IEntityType> = IIBjsEntityMap[T];
