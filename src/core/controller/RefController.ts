import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { IBjsEntityType, IEntityType } from '../../type';
import { Scene } from '@babylonjs/core/scene';

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
    return this.scene.waitFor(type, id, this._ab.signal, resolve, reject);
  }
}
