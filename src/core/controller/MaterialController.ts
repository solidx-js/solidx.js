import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Material } from '@babylonjs/core/Materials/material';
import { IMaterialImpl } from '../impl';

export type IMaterialControllerHostType = XRElement<IMaterialImpl['entity']> & IMaterialImpl;

export class MaterialController implements ReactiveController {
  constructor(private host: IMaterialControllerHostType) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    if (!(this.host.entity instanceof Material)) return;

    const mat = this.host.entity;

    mat.backFaceCulling = !!this.host.evaluated.backFaceCulling;
    mat.wireframe = !!this.host.evaluated.wireframe;
    mat.alpha = this.host.evaluated.alpha ?? 1;
    if (this.host.evaluated.alphaMode !== null) mat.alphaMode = this.host.evaluated.alphaMode;
    mat.disableDepthWrite = !!this.host.evaluated.disableDepthWrite;
    mat.zOffset = this.host.evaluated.zOffset || 0;
    if (this.host.evaluated.sideOrientation !== null) mat.sideOrientation = this.host.evaluated.sideOrientation;
  }
}
