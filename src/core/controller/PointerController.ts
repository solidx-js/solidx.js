import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Scene } from '@babylonjs/core/scene';
import { PointerEventTypes, PointerInfo } from '@babylonjs/core/Events/pointerEvents';
import { Observer } from '@babylonjs/core/Misc/observable';
import { XRMesh } from '../mesh/XRMesh';

export class PointerController implements ReactiveController {
  private _ptOb: Observer<PointerInfo> | null = null;

  constructor(private host: XRElement & { scene: Scene }) {
    this.host.addController(this);
  }

  get scene() {
    return this.host.scene;
  }

  private _handlePointer = (ev: PointerInfo) => {
    const x = this.scene.pointerX;
    const y = this.scene.pointerY;

    const pk = this.scene.pick(x, y);

    if (pk && pk.pickedMesh) {
      const ele = this.host.querySelector<XRMesh>(`xr-mesh#${pk.pickedMesh.id}`);
      if (!ele) return;

      if (ev.type === PointerEventTypes.POINTERTAP) ele.click();
    }
  };

  hostConnected() {
    this._ptOb = this.scene.onPointerObservable.add(this._handlePointer, PointerEventTypes.POINTERTAP);
  }

  hostUpdate(): void {}

  hostDisconnected() {
    if (this._ptOb) {
      this._ptOb.remove();
      this._ptOb = null;
    }
  }
}
