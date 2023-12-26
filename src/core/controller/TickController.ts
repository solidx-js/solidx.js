import { ReactiveController } from 'lit';
import { Observer } from '@babylonjs/core/Misc/observable';
import { Scene } from '@babylonjs/core/scene';
import { XRElement } from '../XRElement';

export class TickController implements ReactiveController {
  constructor(
    private host: XRElement & { scene?: Scene },
    private _onTick: (deltaTime: number) => any
  ) {
    this.host.addController(this);
  }

  private get scene() {
    return this.host.scene;
  }

  private _lastTime = 0;
  private _tickOb: Observer<Scene> | null = null;
  private _timer: number | null = null;

  private _handleFrame = () => {
    const now = performance.now();
    const deltaTime = now - this._lastTime;
    this._lastTime = now;

    this._onTick(deltaTime);
  };

  hostConnected() {
    if (this.scene) {
      this._tickOb = this.scene.onBeforeRenderObservable.add(this._handleFrame);
    } else {
      const _do = () => {
        this._handleFrame();
        this._timer = requestAnimationFrame(_do);
      };

      this._timer = requestAnimationFrame(_do);
    }
  }

  hostDisconnected() {
    if (this._tickOb) {
      this._tickOb.remove();
      this._tickOb = null;
    }

    if (this._timer) {
      cancelAnimationFrame(this._timer);
      this._timer = null;
    }
  }
}
