import { IDataType } from '../util';
import { XRElement } from './XRElement';
import { ContextConsumer } from '@lit/context';
import { Context } from './Context';

export class Component<T = any> {
  /** @override */
  static dataType: IDataType = 'String';

  readonly logger = this.el.logger.extend(this.name);

  protected _disposes: (() => any)[] = [];

  private _data: T | null = null;

  private _time = 0;
  private _timeDelta = 0;

  private ctxs = {
    Scene: new ContextConsumer(this.el, { context: Context.Scene }),
  };

  constructor(
    readonly el: XRElement,
    readonly key: string
  ) {}

  get name() {
    return 'Component';
  }

  get data() {
    return this._data;
  }

  get scene() {
    return this.ctxs.Scene.value!;
  }

  get engine() {
    return this.scene.getEngine();
  }

  flush(data: any) {
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

    for (const dispose of this._disposes) {
      dispose();
    }
    this._disposes = [];
  }
}
