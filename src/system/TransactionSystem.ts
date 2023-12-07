import { Scene } from '@babylonjs/core/scene';
import { Animation } from '@babylonjs/core/Animations/animation';
import { Scalar } from '@babylonjs/core/Maths/math.scalar';
import { Matrix, Quaternion, Vector2, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import set from 'lodash/set';
import { Observer } from '@babylonjs/core/Misc/observable';
import { ISystemImpl } from './System';

export type ITransactionItem = {
  target: any;
  property: string;

  dtType: number;

  startValue: any;
  endValue: any;

  startTime: number;
  duration: number;
};

export class TransactionSystem implements ISystemImpl {
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

  private _tickObserver!: Observer<Scene>;

  constructor(private scene: Scene) {
    this._tickObserver = this.scene.onBeforeRenderObservable.add(() => this.flush());
  }

  set(item: ITransactionItem) {
    // target 和 property 一样的，直接覆盖
    const index = this.list.findIndex(i => i.target === item.target && i.property === item.property);

    if (index !== -1) this.list[index] = item;
    else this.list.push(item);
  }

  get(target: any, property: string) {
    return this.list.find(i => i.target === target && i.property === property);
  }

  remove(target: any, property: string) {
    const index = this.list.findIndex(i => i.target === target && i.property === property);
    if (index !== -1) this.list.splice(index, 1);
  }

  private flush() {
    if (this.list.length === 0) return;

    const now = performance.now();

    for (const item of this.list) {
      const { target, property, startValue, endValue, startTime, duration, dtType } = item;

      const gradient = (now - startTime) / duration;

      if (gradient >= 1) {
        set(target, property, endValue);
        this.remove(target, property);
        continue;
      }

      const lerpFn = TransactionSystem.LerpFns.get(dtType);
      if (!lerpFn) continue;

      if (dtType === Animation.ANIMATIONTYPE_FLOAT || dtType === Animation.ANIMATIONTYPE_VECTOR2) {
        const currentValue = lerpFn(startValue, endValue, gradient);
        set(target, property, currentValue);
      }

      // object 类型用 ref
      else {
        lerpFn(startValue, endValue, gradient, target[property]);
      }
    }
  }

  dispose(): void {
    this._tickObserver.remove();
    this.list = [];
  }
}
