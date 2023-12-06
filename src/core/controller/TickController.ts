import { ReactiveController } from 'lit';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Observer } from '@babylonjs/core/Misc/observable';
import { Scene } from '@babylonjs/core/scene';

export class TickController implements ReactiveController {
  constructor(
    private host: XRSceneScopeElement,
    private _onTick: (deltaTime: number) => any
  ) {
    this.host.addController(this);
  }

  private get scene() {
    return this.host.scene;
  }

  private _lastTime = 0;
  private _tickOb: Observer<Scene> | null = null;

  hostConnected() {
    this._tickOb = this.scene.onBeforeRenderObservable.add(() => {
      const now = performance.now();
      const deltaTime = now - this._lastTime;
      this._lastTime = now;

      this._onTick(deltaTime);
    });
  }

  hostDisconnected() {
    if (this._tickOb) {
      this._tickOb.remove();
      this._tickOb = null;
    }
  }
}
