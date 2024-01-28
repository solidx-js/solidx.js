import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import { ITextureImpl } from '../impl';

export class TextureController implements ReactiveController {
  constructor(private host: XRElement<ITextureImpl['entity']> & ITextureImpl) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    if (!(this.host.entity instanceof BaseTexture)) return;

    const tex = this.host.entity;

    const { hasAlpha, level, coordinatesIndex, coordinatesMode, wrapU, wrapV } = this.host.evaluated;

    if (hasAlpha !== null) tex.hasAlpha = hasAlpha;
    if (level !== null) tex.level = level;
    if (coordinatesIndex !== null) tex.coordinatesIndex = coordinatesIndex;
    if (coordinatesMode !== null) tex.coordinatesMode = coordinatesMode;
    if (wrapU !== null) tex.wrapU = wrapU;
    if (wrapV !== null) tex.wrapV = wrapV;
  }
}
