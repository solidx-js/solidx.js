import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Animation } from '@babylonjs/core/Animations/animation';
import { Scalar } from '@babylonjs/core/Maths/math.scalar';
import { Matrix, Quaternion, Vector2, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { typedClone } from '../../util';

export type ITransactionItem = {
  property: string;

  dtType: number;

  startValue: any;
  endValue: any;

  startTime: number;
  duration: number;
};

export class TransitionController implements ReactiveController {
  static LerpFns = new Map<number, (start: any, end: any, gradient: number, ref?: any) => any>([
    [Animation.ANIMATIONTYPE_FLOAT, Scalar.Lerp],
    [Animation.ANIMATIONTYPE_VECTOR2, Vector2.Lerp],
    [Animation.ANIMATIONTYPE_VECTOR3, Vector3.LerpToRef],
    [Animation.ANIMATIONTYPE_QUATERNION, Quaternion.SlerpToRef],
    [Animation.ANIMATIONTYPE_COLOR3, Color3.LerpToRef],
    [Animation.ANIMATIONTYPE_COLOR4, Color4.LerpToRef],
    [Animation.ANIMATIONTYPE_MATRIX, Matrix.LerpToRef],
  ]);

  list: ITransactionItem[] = [];
  private _rafId?: number;

  constructor(
    private host: XRElement,
    private _targetRef: { [key: string]: any },
    private _onTick: (property: string) => void,
    private _onEnd: (property: string) => void
  ) {
    this.host.addController(this);
  }

  hostConnected() {
    const _flushLoop = () => {
      this.flush();
      requestAnimationFrame(_flushLoop);
    };

    this._rafId = requestAnimationFrame(_flushLoop);
    this.flush(); // 立即执行一次
  }

  set(item: ITransactionItem) {
    // target 和 property 一样的，直接覆盖
    const index = this.list.findIndex(i => i.property === item.property);

    if (index !== -1) this.list[index] = item;
    else this.list.push(item);
  }

  get(property: string) {
    return this.list.find(i => i.property === property);
  }

  remove(property: string) {
    const index = this.list.findIndex(i => i.property === property);
    if (index !== -1) this.list.splice(index, 1);
  }

  private flush() {
    if (this.list.length === 0) return;

    const now = performance.now();
    const target = this._targetRef;

    for (const item of this.list) {
      const { property, startValue, endValue, startTime, duration, dtType } = item;

      const gradient = (now - startTime) / duration;

      if (gradient >= 1) {
        target[property] = typedClone(endValue);

        this._onTick(property);

        this.remove(property);
        delete target[property]; // 删除 ref 对象中的属性

        this._onEnd(property);
        continue;
      }

      const lerpFn = TransitionController.LerpFns.get(dtType);
      if (!lerpFn) continue;

      if (dtType === Animation.ANIMATIONTYPE_FLOAT || dtType === Animation.ANIMATIONTYPE_VECTOR2) {
        target[property] = lerpFn(startValue, endValue, gradient);
      }

      // object 类型用 ref
      else {
        if (!target[property]) target[property] = typedClone(startValue);
        lerpFn(startValue, endValue, gradient, target[property]);
      }

      this._onTick(property);
    }
  }

  hostDisconnected(): void {
    if (this._rafId) cancelAnimationFrame(this._rafId);
    this.list = [];
  }

  trigger(changed: Map<string, any>) {
    for (const [property, oldValue] of changed) {
      const endValue = (this.host as any)[property];

      let dtType: number;

      if (typeof endValue === 'number') dtType = Animation.ANIMATIONTYPE_FLOAT;
      else if (endValue instanceof Color3) dtType = Animation.ANIMATIONTYPE_COLOR3;
      else if (endValue instanceof Color4) dtType = Animation.ANIMATIONTYPE_COLOR4;
      else if (endValue instanceof Vector2) dtType = Animation.ANIMATIONTYPE_VECTOR2;
      else if (endValue instanceof Vector3) dtType = Animation.ANIMATIONTYPE_VECTOR3;
      else if (endValue instanceof Quaternion) dtType = Animation.ANIMATIONTYPE_QUATERNION;
      else if (endValue instanceof Matrix) dtType = Animation.ANIMATIONTYPE_MATRIX;
      else continue; // 不支持的类型

      const transDef = this.host.transition.find(t => t.property === property);
      if (!transDef) {
        this.remove(property);
        continue;
      }

      // 过渡属性
      if (typeof oldValue === 'undefined') {
        const item = this.get(property);
        if (item) item.endValue = endValue;
      } else {
        const startTime = performance.now() + transDef.delay;
        this.set({ ...transDef, startValue: oldValue, endValue, startTime, dtType });

        this.flush(); // 立即执行一次, 使 host 的过渡值立即生效

        this.host.logger.debug('[%s] start transition: %s -> %s, %sms', property, oldValue, endValue, transDef.duration);
      }
    }
  }
}
