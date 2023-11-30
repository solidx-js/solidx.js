import { System } from './System';

export type IAssetData = { buffer: ArrayBuffer; mime: string };

export class AssetsSystem extends System {
  private _cache = new Map<string, IAssetData>();

  get name() {
    return 'AssetsSystem';
  }

  get(key: string) {
    return this._cache.get(key);
  }

  set(key: string, value: IAssetData) {
    this._cache.set(key, value);
    this.scene.emit('assets:set', { key });
  }

  async wait(key: string) {
    const _exists = this._cache.has(key);
    if (_exists) return this._cache.get(key)!;

    await new Promise<void>(resolve => {
      const _onAssetsSet = (ev: Event) => {
        if (ev instanceof CustomEvent && ev.detail.key === key) {
          resolve();
        }
      };
      this.scene.addEventListener('assets:set', _onAssetsSet);
    });

    return this._cache.get(key)!;
  }

  remove(): void {
    super.remove();
    this._cache.clear();
  }
}
