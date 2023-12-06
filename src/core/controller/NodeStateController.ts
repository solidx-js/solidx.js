import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Node } from '@babylonjs/core/node';

export class NodeStateController implements ReactiveController {
  private _lastDisabled = this.host.disabled;

  constructor(private host: XRElement) {
    this.host.addController(this);
  }

  reload(force?: boolean) {
    if (!(this.host.entity instanceof Node)) return;

    const dirty = this._lastDisabled !== this.host.disabled || force;
    if (!dirty) return;

    const entity = this.host.entity;

    entity.setEnabled(!this.host.disabled);
  }

  hostConnected() {
    this.reload();
  }

  hostUpdate(): void {
    this.reload();
  }
}
