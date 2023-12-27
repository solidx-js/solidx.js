import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';

export type ITextureImpl = {
  entity: BaseTexture | null;
  hasAlpha: boolean | null;
  level: number | null;
  coordinatesIndex: number | null;
  coordinatesMode: number | null;
  wrapU: number | null;
  wrapV: number | null;
};
