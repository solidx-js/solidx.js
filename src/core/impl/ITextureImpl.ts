import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';

export type ITextureImpl = {
  entity: BaseTexture | null;
  hasAlpha: boolean;
  level: number;
  coordinatesIndex: number;
  coordinatesMode: number;
  wrapU: number;
  wrapV: number;
};
