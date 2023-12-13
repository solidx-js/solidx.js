import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import * as TWEEN from '@tweenjs/tween.js';
import { IDataType, IDataTypeMap, LerpFns, typedClone } from '../../util';
import { Scene } from '@babylonjs/core/scene';
import { Observer } from '@babylonjs/core/Misc/observable';

export class TweenController implements ReactiveController {
  // 补间动画表
  private _tweenGroup: TWEEN.Group | null = null;
  private _tweenMap: Record<string, { tween: TWEEN.Tween<any>; dType: IDataType; lerpValues: any[] }> = {};

  private _tickObserver: Observer<Scene> | null = null;

  constructor(
    private host: XRElement & { scene?: Scene },
    private _tweenRef: any,
    private _onUpdate: (property: string) => void,
    private _onComplete: (property: string) => void
  ) {
    this.host.addController(this);
  }

  hostConnected() {
    if (this.host.scene) {
      const _group = new TWEEN.Group();
      this._tweenGroup = _group;

      this._tickObserver = this.host.scene.onBeforeRenderObservable.add(() => _group.update());
    }
  }

  hostDisconnected() {
    this._tweenGroup?.removeAll();
    this._tweenGroup = null;

    if (this._tickObserver) {
      this._tickObserver.remove();
      this._tickObserver = null;
    }
  }

  triggerChange(property: string, newValue: any, oldValue: any) {
    if (!this._tweenGroup) return;

    const ani = this._tweenMap[property];

    if (ani) {
      ani.lerpValues[ani.lerpValues.length - 1] = typedClone(newValue); // 更新目标值
    }

    //
    else {
      const dType = this.host._Cls.elementProperties.get(property)?.dType;
      const transDef = this.host.transition.find(i => i.property === property);

      if (typeof oldValue !== 'undefined' && dType && transDef) {
        this._tweenRef[property] = typedClone(oldValue);
        const lerpValues = [typedClone(oldValue), typedClone(newValue)];

        const { timingFunction, delay, duration } = transDef;

        // to 必须用数组形式，才能启用自定义插值函数
        const tween = new TWEEN.Tween(this._tweenRef, this._tweenGroup)
          .to({ [property]: lerpValues }, duration)
          .delay(delay)
          .dynamic(true)
          .onUpdate(() => this._onUpdate(property))
          .onComplete(() => {
            delete this._tweenMap[property];
            this._onComplete(property);
          });

        const lerpFn = LerpFns[dType];

        // 定制补间插值函数
        (tween.interpolation as any)((values: any[], gradient: number) => {
          const result = (lerpFn as any)(values[0], values[1], gradient, this._tweenRef[property]);
          return result;
        });

        // easing 函数
        // Quadratic：二次方的缓动（t^2）
        if (timingFunction === 'ease') tween.easing(TWEEN.Easing.Quadratic.InOut);
        else if (timingFunction === 'ease-in') tween.easing(TWEEN.Easing.Quadratic.In);
        else if (timingFunction === 'ease-out') tween.easing(TWEEN.Easing.Quadratic.Out);
        else if (timingFunction === 'ease-in-out') tween.easing(TWEEN.Easing.Quadratic.InOut);
        else tween.easing(TWEEN.Easing.Linear.None);

        this._tweenMap[property] = { tween, dType, lerpValues };
        tween.start();
      }
    }
  }
}
