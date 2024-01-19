import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Schema, typedClone } from '../../util';
import { ElementRegistry } from '../../registry';
import difference from 'lodash/difference';
import { XRScene } from '../XRScene';

export class TagRefController<T extends HTMLElement, A extends string, B extends string> implements ReactiveController {
  private _ab: AbortController | null = null;
  private _selfHostElement: XRElement | null = null;
  private _lastIncomeData: Record<string, any> | null = null;

  private _sceneEle: XRScene | null = null;

  constructor(
    private host: XRElement & { [key in A]?: string | null } & { [key in B]: T | null },
    private selectorProp: A,
    private targetProp: B,
    private fallbackTagName: string | null
  ) {
    this.host.addController(this as any);
  }

  private _setTarget = (target: T | null) => {
    const _host = this.host as any;
    _host[this.targetProp] = target;
  };

  hostConnected(): void {
    this._sceneEle = this.host.closest('xr-scene');
  }

  hostUpdated(): void {
    if (!this._sceneEle) return;

    if (this.host.changed.has(this.selectorProp)) {
      const selector = this.host.evaluated[this.selectorProp] as string | null;

      if (typeof selector === 'string') {
        // object 格式
        if ((selector.startsWith('?') || selector.match(/^[\w-_]+\?/)) && this.fallbackTagName) {
          let [_tagName, _query] = selector.split('?');

          _tagName = _tagName.trim() || this.fallbackTagName;
          _query = _query.trim();

          const _inData = Schema.fromAttr('Object', _query);
          const Cls = ElementRegistry.Instance.get(_tagName);

          if (_inData && Cls && Cls) {
            // 检查是否需要重新创建元素: tag 名字不一样
            if (this._selfHostElement && this._selfHostElement.tagName.toLowerCase() !== _tagName.toLowerCase()) {
              this._selfHostElement.remove();
              this._selfHostElement = null;
            }

            // 创建内部元素
            if (!this._selfHostElement) {
              const _ele = new Cls();
              if (!(_ele instanceof XRElement)) throw new Error(`TagRefController: ${_tagName} is not a XRElement`);

              this._selfHostElement = _ele;

              // 设置初始属性
              for (const [_k, _v] of Object.entries(_inData)) _ele.setAttribute(_k, _v as any);

              // 添加到 host 上
              this.host.appendChild(_ele);

              if (!_ele.entity) {
                this.host.logger.warn('TagRefController: entity is null when ref is object. tag=%s', _ele.tagName.toLowerCase());
              }

              this._setTarget(_ele as any);
            }

            // 更新属性
            else {
              const _toResetKeys = this._lastIncomeData ? difference(Object.keys(this._lastIncomeData), Object.keys(_inData)) : [];

              // 重置属性(用默认值)
              for (const _k of _toResetKeys) {
                const _def = [...Cls.elementProperties.values()].find(v => v.attribute === _k) || Cls.elementProperties.get(_k);
                if (!_def) continue;

                const _v = _def.initValue;
                if (_v === null) continue;

                const propKey = [...Cls.elementProperties.entries()].find(([, v]) => v === _def)![0];

                (this._selfHostElement as any)[propKey] = typedClone(_v as any);
              }

              // 设置属性
              for (const [_k, _v] of Object.entries(_inData)) this._selfHostElement.setAttribute(_k, _v as any);
            }

            this._lastIncomeData = _inData;
          }
        }

        // 普通 string 格式
        else {
          if (this._ab) this._ab.abort();
          this._ab = new AbortController();

          if (this._selfHostElement) {
            this._selfHostElement.remove();
            this._selfHostElement = null;
          }

          this._sceneEle.querier.queryWatch<T>(selector, this._ab.signal, this._setTarget, this.host.displayText);
        }
      }

      // 没有 selector, 清空
      else {
        this._setTarget(null);

        if (this._selfHostElement) {
          this._selfHostElement.remove();
          this._selfHostElement = null;
        }
      }
    }
  }

  hostDisconnected() {
    if (this._ab) {
      this._ab.abort();
      this._ab = null;
    }

    this._setTarget(null);

    if (this._selfHostElement) {
      this._selfHostElement.remove();
      this._selfHostElement = null;
    }

    this._lastIncomeData = null;
  }
}
