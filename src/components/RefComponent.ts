import { ISchema } from '../util';
import { Component } from './Component';

export class RefComponent<T> extends Component<string> {
  static schema: ISchema = { type: 'string' };

  protected _target: T | null = null;

  get name(): string {
    return 'MaterialComponent';
  }

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
