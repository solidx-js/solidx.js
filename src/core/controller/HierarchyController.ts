import { ReactiveController } from 'lit';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { ElementUtil } from '../../util';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export class HierarchyController implements ReactiveController {
  constructor(
    private host: XRSceneScopeElement,
    private _onParentChanged: (parent: TransformNode | null) => any
  ) {
    this.host.addController(this);
  }

  private get scene() {
    return this.host.scene;
  }

  hostConnected() {
    const parent = ElementUtil.closestTransformNodeLike(this.host);
    this._onParentChanged(parent);
  }

  hostUpdate(): void {
    const parent = ElementUtil.closestTransformNodeLike(this.host);
    this._onParentChanged(parent);
  }

  hostDisconnected() {
    this._onParentChanged(null);
  }
}
