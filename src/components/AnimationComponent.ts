import { Animation } from '@babylonjs/core/Animations/animation';
import { RefComponent } from './RefComponent';
import { MathUtil } from '../util';

export class AnimationComponent extends RefComponent<Animation> {
  protected _type = 'animation' as const;

  get name() {
    return 'AnimationComponent';
  }

  onConnect(): void {
    if (!this._targets) return;

    this.el.animations = [...this._targets];

    for (const ani of this.el.animations) {
      const [from, to] = MathUtil.minmax(ani.getKeys(), k => k.frame);
      const loop = ani.loopMode === Animation.ANIMATIONLOOPMODE_CYCLE || ani.loopMode === Animation.ANIMATIONLOOPMODE_YOYO;

      const el = this.el;

      const target = el._Cls.observedAttributes.includes(ani.targetProperty)
        ? el
        : {
            set [ani.targetProperty](v: any) {
              el.setAttribute(ani.targetProperty, v);
            },
          };

      const animatable = this.scene.beginDirectAnimation(target, [ani], from, to, loop);
      this._disposes.push(() => animatable.stop());
    }
  }

  onDisconnect(): void {
    this.el.animations = [];
  }
}
