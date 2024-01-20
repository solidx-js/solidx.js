import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Node } from '@babylonjs/core/node';

export class NodeStateController implements ReactiveController {
  constructor(private host: XRElement) {
    this.host.addController(this);
  }

  private reload() {
    if (!(this.host.entity instanceof Node)) return;

    const entity = this.host.entity;
    const changed = this.host.changed;

    if (changed.has('disabled')) {
      entity.setEnabled(!this.host.evaluated.disabled);
    }
  }

  // hostConnected() {
  //   this.reload();
  // }

  hostUpdate(): void {
    this.reload();
  }
}
