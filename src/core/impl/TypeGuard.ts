import { ITransformNodeLikeImpl } from './ITransformNodeLikeImpl';
import { IGeometryImpl } from './IGeometryImpl';
import { ITextureImpl } from './ITextureImpl';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export const TypeGuard = {
  isTransformNodeLikeImpl: (obj: any): obj is ITransformNodeLikeImpl => {
    return (
      typeof obj === 'object' &&
      (obj as ITransformNodeLikeImpl).position instanceof Vector3 &&
      (obj as ITransformNodeLikeImpl).rotation instanceof Vector3 &&
      (obj as ITransformNodeLikeImpl).scale instanceof Vector3 &&
      typeof (obj as ITransformNodeLikeImpl).layer === 'number'
    );
  },
  isGeometryImpl: (obj: any): obj is IGeometryImpl => {
    return typeof obj === 'object';
  },
  isTextureImpl: (obj: any): obj is ITextureImpl => {
    return (
      typeof obj === 'object' &&
      typeof (obj as ITextureImpl).hasAlpha === 'boolean' &&
      typeof (obj as ITextureImpl).level === 'number' &&
      typeof (obj as ITextureImpl).coordinatesIndex === 'number' &&
      typeof (obj as ITextureImpl).coordinatesMode === 'number' &&
      typeof (obj as ITextureImpl).wrapU === 'number' &&
      typeof (obj as ITextureImpl).wrapV === 'number'
    );
  },
};
