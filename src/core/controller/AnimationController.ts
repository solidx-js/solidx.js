import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { XRKeyFrames } from '../XRKeyFrames';

export type IAniDefs = Record<
  string,
  {
    frames: { percentage: number; data: Record<string, string> }[];
  }
>;

export class AnimationController implements ReactiveController {
  private _aniDefs: IAniDefs = {};

  constructor(private host: XRElement) {
    this.host.addController(this);
  }

  get _transitionCtrl() {
    return this.host._transitionCtrl;
  }

  hostConnected() {}

  hostDisconnected(): void {
    this._aniDefs = {};
  }

  trigger(changed: Map<string, any>): void {}
}
