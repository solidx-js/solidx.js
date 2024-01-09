import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { XRScene } from '../XRScene';

export class TagListRefController<T extends HTMLElement, A extends string, B extends string> implements ReactiveController {
  private _ab: AbortController | null = null;
  private _sceneEle: XRScene | null = null;

  constructor(
    private host: XRElement & {
      [key in A]?: string | null;
    } & {
      [key in B]: T[] | null;
    },
    private selectorProp: A,
    private targetProp: B
  ) {
    this.host.addController(this as any);
  }

  private _setTarget = (target: T[] | null) => {
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
        if (this._ab) {
          this._ab.abort();
          this._ab = null;
        }

        this._ab = new AbortController();
        this._sceneEle.querier.queryWatchList<T>(selector, this._ab.signal, this._setTarget, this.host.displayText);
      }

      // 没有 selector, 清空
      else {
        this._setTarget(null);
      }
    }
  }

  hostDisconnected() {
    if (this._ab) {
      this._ab.abort();
      this._ab = null;
    }

    this._setTarget(null);
  }
}
