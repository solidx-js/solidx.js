import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Material } from '@babylonjs/core/Materials/material';

export type IMaterialControllerHostType = XRElement<Material> & {
  backFaceCulling: boolean;
  wireframe: boolean;
  alpha: number;
  alphaMode: number;
  disableDepthWrite: boolean;
  zOffset: number;
  sideOrientation: number;
};

export class MaterialController implements ReactiveController {
  constructor(private host: IMaterialControllerHostType) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    if (!(this.host.entity instanceof Material)) return;

    const mat = this.host.entity;
    const changed = this.host.changed;

    if (changed.has('backFaceCulling')) mat.backFaceCulling = this.host.backFaceCulling;
    if (changed.has('wireframe')) mat.wireframe = this.host.wireframe;
    if (changed.has('alpha')) mat.alpha = this.host.alpha;
    if (changed.has('alphaMode')) mat.alphaMode = this.host.alphaMode;
    if (changed.has('disableDepthWrite')) mat.disableDepthWrite = this.host.disableDepthWrite;
    if (changed.has('zOffset')) mat.zOffset = this.host.zOffset;
    if (changed.has('sideOrientation')) mat.sideOrientation = this.host.sideOrientation;
  }
}
