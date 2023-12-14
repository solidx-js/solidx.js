import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Material } from '@babylonjs/core/Materials/material';

export class MaterialController implements ReactiveController {
  constructor(
    private host: XRElement<Material> & {
      backFaceCulling?: boolean;
      wireframe?: boolean;
      alpha?: number;
      alphaMode?: number;
      disableDepthWrite?: boolean;
      zOffset?: number;
      sideOrientation?: number;
    }
  ) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    if (!(this.host.entity instanceof Material)) return;

    const mat = this.host.entity;

    if (typeof this.host.backFaceCulling === 'boolean') mat.backFaceCulling = this.host.backFaceCulling;
    if (typeof this.host.wireframe === 'boolean') mat.wireframe = this.host.wireframe;
    if (typeof this.host.alpha === 'number') mat.alpha = this.host.alpha;
    if (typeof this.host.alphaMode === 'number') mat.alphaMode = this.host.alphaMode;
    if (typeof this.host.disableDepthWrite === 'boolean') mat.disableDepthWrite = this.host.disableDepthWrite;
    if (typeof this.host.zOffset === 'number') mat.zOffset = this.host.zOffset;
    if (typeof this.host.sideOrientation === 'number') mat.sideOrientation = this.host.sideOrientation;
  }
}
