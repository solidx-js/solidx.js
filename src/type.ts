import type { BaseTexture, TransformNode } from '@babylonjs/core';
import type { Material } from '@babylonjs/core/Materials/material';
import type { Geometry } from '@babylonjs/core/Meshes/geometry';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';

export type IEntityType = 'mesh' | 'material' | 'geometry' | 'animation' | 'transformNode' | 'transformNodeLike' | 'texture';

export type IIBjsEntityMap = {
  mesh: Mesh;
  material: Material;
  geometry: Geometry;
  animation: Animation;
  transformNode: TransformNode;
  transformNodeLike: Mesh | TransformNode;
  texture: BaseTexture;
};

export type IBjsEntityType<T extends IEntityType> = IIBjsEntityMap[T];