import { ReactiveController, TemplateResult } from 'lit';
import { XRElement } from '../XRElement';
import { IBjsEntityType, IEntityType } from '../../type';
import { Scene } from '@babylonjs/core/scene';
import { Schema, randomID } from '../../util';
import { EntityTagNameMap } from '../../registry';

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

  constructor(
    private host: XRElement & { scene: Scene } & Record<A, string | null> & { [key in B]: IBjsEntityType<T> | null },
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

    console.log('@@@', 'target ->', target);
    _host[this.targetProp] = target;
  };

  hostConnected(): void {}

  hostUpdated(): void {
    if (this.host.changed.has(this.refProp)) {
      const ref = this.host[this.refProp] as string | null;

      if (typeof ref === 'string') {
        // object 格式
        if (ref.includes(':') || ref === '') {
          // 创建内部元素
          if (!this._selfHostElement) {
            const _tagName = EntityTagNameMap[this.type];
            if (!_tagName) throw new Error(`RefController2: can not find tagName for type: ${this.type}`);

            const _ele = document.createElement('xr-texture') as XRElement;
            _ele.id = `${this.type}:_ref_:${randomID()}`;

            this.host.appendChild(_ele);
            this._selfHostElement = _ele;
          }

          const data = Schema.parse('Object', ref);

          for (const [key, value] of Object.entries(data)) {
            this._selfHostElement.setAttribute(key, value);
          }

          const entity = this._selfHostElement.entity;
          if (!entity) this.host.logger.warn('RefController2: entity is null when ref is object.');

          this._setTarget(entity);
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
  }
}
