import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';

export class TextureController implements ReactiveController {
  constructor(
    private host: XRElement<BaseTexture> & {
      hasAlpha?: boolean;
      level?: number;
      coordinatesIndex?: number;
      coordinatesMode?: number;
      wrapU?: number;
      wrapV?: number;
    }
  ) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    if (!(this.host.entity instanceof BaseTexture)) return;

    const tex = this.host.entity;

    if (typeof this.host.hasAlpha === 'boolean') tex.hasAlpha = this.host.hasAlpha;
    if (typeof this.host.level === 'number') tex.level = this.host.level;
    if (typeof this.host.coordinatesIndex === 'number') tex.coordinatesIndex = this.host.coordinatesIndex;
    if (typeof this.host.coordinatesMode === 'number') tex.coordinatesMode = this.host.coordinatesMode;
    if (typeof this.host.wrapU === 'number') tex.wrapU = this.host.wrapU;
    if (typeof this.host.wrapV === 'number') tex.wrapV = this.host.wrapV;
  }
}
