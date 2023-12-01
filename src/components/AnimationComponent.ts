import { Animation } from '@babylonjs/core/Animations/animation';
import { RefComponent } from './RefComponent';
import { MathUtil } from '../util';

export class AnimationComponent extends RefComponent<Animation[]> {
  get name() {
    return 'AnimationComponent';
  }

  onFetchTarget(): Animation[] | null {
    if (!this.data) return null;

    const ids = this.data.split(' ');
    return this.scene.animations.filter(a => ids.includes(a.name));
  }

  onConnect(): void {
    if (!this._target) return;

    this.el.animations = [...this._target];

    for (const ani of this.el.animations) {
      const [from, to] = MathUtil.minmax(ani.getKeys(), k => k.frame);
      const loop = ani.loopMode === Animation.ANIMATIONLOOPMODE_CYCLE || ani.loopMode === Animation.ANIMATIONLOOPMODE_YOYO;

      const animatable = this.scene.beginDirectAnimation(this.el, [ani], from, to, loop);
      this._disposes.push(() => animatable.stop());
    }
  }

  onDisconnect(): void {
    this.el.animations = [];
  }
}
