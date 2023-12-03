import { ISchema } from '../util';
import { Component } from './Component';

export class RefComponent<T> extends Component<string> {
  static schema: ISchema = { type: 'string' };

  protected _target: T | null = null;

  update(): void {
    this._target = this.onFetchTarget();
    this.onConnect();
  }

  remove(): void {
    super.remove();
    this.onDisconnect();
  }

  /** @override */
  onFetchTarget(): T | null {
    return null;
  }

  /** @override */
  onConnect() {}

  /** @override */
  onDisconnect() {}
}

export class RefComponent2<T> extends Component<string> {
  static schema: ISchema = { type: 'string' };

  protected _type: 'mesh' | 'material' | 'geometry' = 'mesh';
  protected _target: T | null = null;

  private _ab: AbortController | null = null;

  update(): void {
    if (!this.data) {
      if (this._target) {
        this._target = null;
        this.onDisconnect();
      }

      return;
    }

    if (this._ab) {
      this._ab.abort();
      this._ab = null;
    }

    this._ab = new AbortController();

    this.scene.systems.entity.waitFor(this._type as any, this.data, this._ab.signal).then(entity => {
      this._target = entity as any;
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
