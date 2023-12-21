import { ReactiveController, TemplateResult } from 'lit';
import { XRElement } from '../XRElement';
import { IBjsEntityType, IEntityType } from '../../type';
import { Scene } from '@babylonjs/core/scene';
import { Schema, randomID, typedClone } from '../../util';
import { ElementRegistry, EntityTagNameMap } from '../../registry';
import difference from 'lodash/difference';
import { XRScene } from '../XRScene';

/** @deprecated */
export class RefController<T extends IEntityType> implements ReactiveController {
  private _ab: AbortController | null = null;
  private _customResolvedInfo: { entity: IBjsEntityType<T>; dispose: () => any } | null = null;

  private _lastRef: string | null = null;

  target: IBjsEntityType<T> | null = null;

  constructor(
    private host: XRElement & { scene: Scene },
    private _type: T,
    private _onGetRefString: () => string | null,
    private _onResult: (target: IBjsEntityType<T> | null) => void,
    private _onResolveRef?: (ref: string) => { entity: IBjsEntityType<T>; dispose: () => any }
  ) {
    this.host.addController(this);
  }

  private get scene() {
    return this.host.scene;
  }

  reload(force?: boolean): void {
    const ref = this._onGetRefString();
    if (ref === this._lastRef && !force) return; // no change

    if (ref) {
      this._waitFor(
        this._type,
        ref,
        target => {
          this.host.logger.debug(
            'RefController resolved: %s - %s',
            (target as any).id || (target as any).name,
            (target as any).getClassName?.()
          );

          this.target = target;
          this._onResult(target);
        },
        () => {
          this.target = null;
          this._onResult(null);
        }
      );
    } else {
      this.target = null;
      this._onResult(null);
    }

    this._lastRef = ref;
  }

  hostUpdate(): void {
    this.reload();
  }

  hostDisconnected() {
    if (this._ab) {
      this._ab.abort();
      this._ab = null;
    }
  }

  private _waitFor(type: T, id: string, resolve: (target: IBjsEntityType<T>) => any, reject: (err: Error) => any): void {
    if (this._ab) this._ab.abort();

    if (this._customResolvedInfo) {
      this._customResolvedInfo.dispose();
      this._customResolvedInfo = null;
    }

    if (this._onResolveRef) {
      this._customResolvedInfo = this._onResolveRef(id);
      this._customResolvedInfo.entity;
      return resolve(this._customResolvedInfo.entity);
    }

    this._ab = new AbortController();
    return this.scene.queryWait(type, id, this._ab.signal, resolve, reject);
  }
}

export class RefController2<T extends IEntityType, A extends string, B extends string> implements ReactiveController {
  private _ab: AbortController | null = null;
  private _selfHostElement: XRElement | null = null;
  private _lastIncomeData: Record<string, any> | null = null;

  constructor(
    private host: XRElement & { scene: Scene } & Partial<Record<A, string | undefined | null>> & { [key in B]: IBjsEntityType<T> | null },
    private type: T,
    private refProp: A,
    private targetProp: B
  ) {
    this.host.addController(this as any);
  }

  private get scene() {
    return this.host.scene;
  }

  private _setTarget = (target: IBjsEntityType<T> | null) => {
    const _host = this.host as any;
    _host[this.targetProp] = target;
  };

  hostConnected(): void {
    this.reload();
  }

  hostUpdated() {
    this.reload();
  }

  reload(): void {
    if (this.host.changed.has(this.refProp)) {
      const ref = this.host.evaluated[this.refProp] as string | null;

      if (typeof ref === 'string') {
        // object 格式
        if (ref.includes(':') || ref === '') {
          const _tagName = EntityTagNameMap[this.type];
          if (!_tagName) throw new Error(`RefController2: can not find tagName for type: ${this.type}`);

          const Cls = ElementRegistry.Instance.get(_tagName);
          const _inData = Schema.parse('Object', ref);

          // 创建内部元素
          if (!this._selfHostElement) {
            const _ele = new Cls();
            _ele.id += `_ref_${this.type}`;
            this._selfHostElement = _ele;

            // 设置初始属性
            for (const [_k, _v] of Object.entries(_inData)) _ele.setAttribute(_k, _v as any);

            // 添加到 host 上
            this.host.appendChild(_ele);

            const entity = _ele.entity;
            if (!entity) {
              this.host.logger.warn('RefController2: entity is null when ref is object. tag=%s', _ele.tagName.toLowerCase());
            }

            this._setTarget(entity);
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

        // string 格式
        else {
          if (this._ab) this._ab.abort();
          this._ab = new AbortController();

          if (this._selfHostElement) {
            this._selfHostElement.remove();
            this._selfHostElement = null;
          }

          this.scene.queryWait(this.type, ref, this._ab.signal, this._setTarget, () => this._setTarget(null));
        }
      }

      // 没有 ref，清空
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

export class TagRefController<T extends HTMLElement, A extends string, B extends string> implements ReactiveController {
  private _ab: AbortController | null = null;
  private _selfHostElement: XRElement | null = null;
  private _lastIncomeData: Record<string, any> | null = null;

  private _sceneEle: XRScene | null = null;

  constructor(
    private host: XRElement & { [key in A]?: string | null } & { [key in B]: T | null },
    private selectorProp: A,
    private targetProp: B
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
        if (selector.includes(':') || selector === '') {
          this.host.logger.warn('TagRefController: object selector is not supported yet.');
        }

        // string 格式
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
