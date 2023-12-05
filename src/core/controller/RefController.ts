import { ReactiveController, ReactiveControllerHost } from 'lit';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { IBjsEntityType, IEntityType } from '../../type';

export class RefController<T extends IEntityType> implements ReactiveController {
  private _ab: AbortController | null = null;
  private _customResolvedInfo: { entity: IBjsEntityType<T>; dispose: () => any } | null = null;

  private _lastRef: string | null = null;

  constructor(
    private host: XRSceneScopeElement,
    private _type: T,
    private _onGetRefString: () => string | null,
    private _onResult: (target: IBjsEntityType<T> | null) => void,
    private _onResolveRef?: (ref: string) => Promise<{ entity: IBjsEntityType<T>; dispose: () => any }>
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
      this._waitFor(this._type, ref)
        .then(entity => {
          this.host.logger.debug(
            'RefController resolved: %s - %s',
            (entity as any).id || (entity as any).name,
            (entity as any).getClassName?.()
          );

          this._onResult(entity);
        })
        .catch(() => this._onResult(null));
    } else {
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

  private async _waitFor(type: T, id: string): Promise<IBjsEntityType<T>> {
    if (this._ab) this._ab.abort();

    if (this._customResolvedInfo) {
      this._customResolvedInfo.dispose();
      this._customResolvedInfo = null;
    }

    if (this._onResolveRef) {
      this._customResolvedInfo = await this._onResolveRef(id);
      return this._customResolvedInfo.entity;
    }

    this._ab = new AbortController();
    return this.scene.waitFor(type, id, this._ab.signal);
  }
}
