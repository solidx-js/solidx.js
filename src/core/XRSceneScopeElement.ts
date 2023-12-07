import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { XRElement } from './XRElement';
import { property } from 'lit/decorators';
import { parseDurationString, typedClone } from '../util';
import get from 'lodash/get';
import set from 'lodash/set';

export class XRSceneScopeElement<T = any> extends XRElement<T> {
  @Decorator.scene()
  scene!: Scene;

  // 基础属性
  @property({ converter: { fromAttribute: (value: string) => parseTransitions(value) } })
  transition: { property: string; duration: number; timingFunction: string; delay: number }[] = [];

  private get transactionSystem() {
    return this.scene.transactionSystem;
  }

  setWithTransition<K extends object>(target: K, property: keyof K, hostProperty: string, dataType: number, mapper?: (value: any) => any) {
    let value = (this as any)[hostProperty];
    if (typeof value === 'undefined') return;

    if (mapper) value = mapper(value);

    const transItem = this.transition.find(t => t.property === hostProperty);

    // 定义了过渡
    if (transItem) {
      const curTrans = this.transactionSystem.get(target, property as string);

      // 正在过渡中
      if (curTrans) {
        curTrans.endValue = typedClone(value);
      }

      // 启动过渡
      else {
        const { duration, timingFunction, delay } = transItem;

        const startTime = performance.now() + delay;
        const startValue = typedClone(get(target, property) as any);

        this.transactionSystem.set({
          target,
          property: hostProperty,
          startValue,
          endValue: typedClone(value),
          startTime,
          duration,
          dtType: dataType,
        });
      }
    }

    // 没有定义过渡, 直接赋值
    else {
      set(target, property as string, typedClone(value));
    }
  }
}

function parseTransitions(attr: string) {
  const list: { property: string; duration: number; timingFunction: string; delay: number }[] = [];

  const parts = attr.split(',');

  for (const part of parts) {
    const [property, duration = '0s', timingFunction = '', delay = '0s'] = part.split(/\s+/g);
    list.push({ property, duration: parseDurationString(duration), timingFunction, delay: parseFloat(delay) });
  }

  return list;
}
