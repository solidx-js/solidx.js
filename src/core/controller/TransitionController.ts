import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { IDataType, LerpFns, typedClone } from '../../util';

export type ITransactionItem = {
  property: string;

  dType: IDataType;

  startValue: any;
  endValue: any;

  startTime: number;
  duration: number;

  _resolve?: () => void;
};

export class TransitionController implements ReactiveController {
  list: ITransactionItem[] = [];
  private _rafId?: number;

  constructor(
    private host: XRElement,
    private _targetRef: { [key: string]: any },
    private _onTick: (property: string) => void
  ) {
    this.host.addController(this);
  }

  hostConnected() {
    const _flushLoop = () => {
      this._handleTick();
      requestAnimationFrame(_flushLoop);
    };

    this._rafId = requestAnimationFrame(_flushLoop);
    this._handleTick(); // 立即执行一次
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

  _handleTick() {
    if (this.list.length === 0) return;

    const now = performance.now();
    const target = this._targetRef;

    for (const item of this.list) {
      const { property, startValue, endValue, startTime, duration, dType, _resolve } = item;

      const gradient = (now - startTime) / duration;

      if (gradient >= 1) {
        target[property] = typedClone(endValue);

        this._onTick(property);

        this.remove(property);
        delete target[property]; // 删除 ref 对象中的属性

        if (_resolve) _resolve();

        continue;
      }

      const lerpFn = LerpFns[dType];
      if (!lerpFn) continue;

      target[property] = (lerpFn as any)(startValue, endValue, gradient, target[property]);

      this._onTick(property);
    }
  }

  hostDisconnected(): void {
    if (this._rafId) cancelAnimationFrame(this._rafId);
    this.list = [];
  }
}
