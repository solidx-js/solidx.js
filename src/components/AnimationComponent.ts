import { Animation } from '@babylonjs/core/Animations/animation';
import { RefComponent } from './RefComponent';
import { MathUtil } from '../util';

export class AnimationComponent extends RefComponent<Animation> {
  get name() {
    return 'AnimationComponent';
  }

  onFetchTarget(): Animation | null {
    if (!this.data) return null;
    return this.scene.animations.find(a => a.name === this.data) || null;
  }

  onConnect(): void {
    if (!this._target) return;

    this.el.animations = [this._target];
    const frameRange = MathUtil.minmax(this._target.getKeys(), k => k.frame);

    this.scene.beginAnimation(this.el, frameRange[0], frameRange[1], true);
  }
}
