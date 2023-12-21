import type { BaseTexture, TransformNode, CubeTexture, BackgroundMaterial, Vector3, Quaternion } from '@babylonjs/core';
import type { Material } from '@babylonjs/core/Materials/material';
import type { Geometry } from '@babylonjs/core/Meshes/geometry';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';
import type { GridMaterial } from '@babylonjs/materials';

export type IEntityType =
  | 'mesh'
  | 'material'
  | 'background-material'
  | 'grid-material'
  | 'geometry'
  | 'animation'
  | 'transformNode'
  | 'transformNodeLike'
  | 'texture'
  | 'cube-texture';

export type IIBjsEntityMap = {
  mesh: Mesh;
  material: Material;
  'background-material': BackgroundMaterial;
  'grid-material': GridMaterial;
  geometry: Geometry;
  animation: Animation;
  transformNode: TransformNode;
  transformNodeLike: Mesh | TransformNode;
  texture: BaseTexture;
  'cube-texture': CubeTexture;
};

export type IBjsEntityType<T extends IEntityType> = IIBjsEntityMap[T];

export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type PickStringKey<T> = {
  [K in keyof T]: K extends string ? T[K] : never;
};

export type IAniItem = {
  iterationCount: number;
  direction: string;
  fillMode: string;
  playState: string;
  duration: number;
  timingFunction: string;
  delay: number;
  name: string;
};

export type ITransformNodeLikeImpl = {
  entity: TransformNode | null;
  position: Vector3;
  rotation: Vector3;
  quaternion: Quaternion | null;
  scale: Vector3;
  layer: number;
};
