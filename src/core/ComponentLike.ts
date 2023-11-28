import { isEqual } from 'lodash';
import { ISchema } from '../util';
import { XREntity } from './XREntity';
import { XRScene } from './XRScene';

export class ComponentLike<T = any> {
  /** @override */
  static schema: ISchema = { type: 'boolean' };

  readonly logger = this.el.logger.extend(this.name);

  private _data: T | null = null;
  private _prevData: T | null = null;

  constructor(
    readonly el: XREntity,
    readonly key: string
  ) {}

  get name() {
    return 'Component';
  }

  get data() {
    return this._data;
  }

  get prevData() {
    return this._prevData;
  }

  get scene() {
    const _s = this.el.closest<XRScene>('xr-scene')?.scene;
    if (!_s) throw new Error('Entity: xr-scene not found');
    return _s;
  }

  flush(data: any) {
    if (isEqual(this._data, data)) return; // no change

    this._prevData = this._data;
    this._data = data;

    this.update();
  }

  /** @override */
  init() {
    this.logger.debug('init');
  }

  /** @override */
  update() {}

  /** @override */
  tick(time: number, timeDelta: number) {}

  /** @override */
  tock(time: number, timeDelta: number) {}

  /** @override */
  play() {}

  /** @override */
  pause() {}

  /** @override */
  remove() {
    this.logger.debug('remove');

    this._data = null;
    this._prevData = null;
  }
}
