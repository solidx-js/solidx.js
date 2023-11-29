import { isEqual } from 'lodash';
import { ISchema } from '../util';
import { XREntity } from './XREntity';
import { XRScene } from './XRScene';

export class ComponentLike<T = any> {
  /** @override */
  static schema: ISchema = { type: 'boolean' };

  readonly logger = this.el.logger.extend(this.name);

  private _disposes: (() => any)[] = [];

  private _data: T | null = null;
  private _prevData: T | null = null;

  private _time = 0;
  private _timeDelta = 0;

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

  get sceneEle() {
    return this.el.sceneEle;
  }

  get system() {
    return this.sceneEle.system;
  }

  get scene() {
    const _s = this.sceneEle?.scene;
    if (!_s) throw new Error('Entity: xr-scene not found');
    return _s;
  }

  get engine() {
    return this.scene.getEngine();
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

    // 绑定 tick & tock
    const _tickOb = this.scene.onBeforeRenderObservable.add(() => {
      const _cur = performance.now();
      this._timeDelta = _cur - this._time;
      this._time = _cur;

      this.tick();
    });
    this._disposes.push(() => _tickOb.remove());

    const _tockOb = this.scene.onAfterRenderObservable.add(() => this.tock());
    this._disposes.push(() => _tockOb.remove());
  }

  /** @override */
  update() {}

  /** @override */
  tick() {}

  /** @override */
  tock() {}

  /** @override */
  play() {}

  /** @override */
  pause() {}

  /** @override */
  remove() {
    this.logger.debug('remove');

    this._data = null;
    this._prevData = null;

    for (const dispose of this._disposes) {
      dispose();
    }
    this._disposes = [];
  }
}
