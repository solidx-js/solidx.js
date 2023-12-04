import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { RefComponent } from './RefComponent';
import { TargetCamera } from '@babylonjs/core/Cameras/targetCamera';

export class TargetComponent extends RefComponent<TransformNode> {
  _type = 'transformNodeLike' as const;

  get name() {
    return 'TargetComponent';
  }

  onConnect(): void {
    if (!this.el.entity || !this._targets || !this._targets.length) return;

    const entity = this.el.entity;

    if (entity instanceof TargetCamera) {
      const target = this._targets[0];
      entity.lockedTarget = target;

      this._disposes.push(() => {
        if (entity.lockedTarget === target) entity.lockedTarget = null;
      });
    }
  }

  onDisconnect(): void {}
}
