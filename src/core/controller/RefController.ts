import { ReactiveController, ReactiveControllerHost } from 'lit';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { IBjsEntityType, IEntityType } from '../../type';

export class RefController<T extends IEntityType> implements ReactiveController {
  private _ab: AbortController | null = null;

  constructor(
    private host: XRSceneScopeElement,
    private _type: T,
    private _onGetRefString: () => string | null,
    private _onResult: (target: IBjsEntityType<T> | null) => void
  ) {
    this.host.addController(this);
  }

  private get scene() {
    return this.host.scene;
  }

  hostConnected() {}

  hostUpdate(): void {
    const ref = this._onGetRefString();

    if (ref) {
      this._waitFor(this._type, ref)
        .then(entity => {
          this.host.logger.debug('RefController resolved: %s - %s', entity.id, (entity as any).getClassName?.());
          this._onResult(entity);
        })
        .catch(() => this._onResult(null));
    } else {
      this._onResult(null);
    }
  }

  hostDisconnected() {
    if (this._ab) {
      this._ab.abort();
      this._ab = null;
    }
  }

  private async _waitFor<T extends IEntityType>(type: T, id: string): Promise<IBjsEntityType<T>> {
    if (this._ab) this._ab.abort();

    this._ab = new AbortController();
    return this.scene.waitFor(type, id, this._ab.signal);
  }
}
