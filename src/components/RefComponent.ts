import { Component } from '../core';
import { IDataType } from '../util';

export class RefComponent<T> extends Component<string[]> {
  static dataType: IDataType = 'Array';

  protected _type: 'mesh' | 'material' | 'geometry' | 'animation' = 'mesh';
  protected _targets: T[] | null = null;

  private _ab: AbortController | null = null;

  update(): void {
    if (!this.data) {
      if (this._targets) {
        this._targets = null;
        this.onDisconnect();
      }

      return;
    }

    if (this._ab) {
      this._ab.abort();
      this._ab = null;
    }

    this._ab = new AbortController();
    const signal = this._ab.signal;

    Promise.all(this.data.map(id => this.scene.systems.entity.waitFor(this._type as any, id, signal))).then(entities => {
      this._targets = entities as any;
      this.onConnect();
    });
  }

  remove(): void {
    super.remove();
    this._ab?.abort();
    this._ab = null;
    this.onDisconnect();
  }

  /** @override */
  onConnect() {}

  /** @override */
  onDisconnect() {}
}
