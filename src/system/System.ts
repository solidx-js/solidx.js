import { Scene } from '@babylonjs/core/scene';
import { DefaultBizLogger } from '../BizLogger';

export class System {
  readonly logger = DefaultBizLogger.extend(this.name);

  private _disposes: (() => any)[] = [];

  private _time = 0;
  private _timeDelta = 0;

  constructor(readonly scene: Scene) {}

  get name() {
    return 'System';
  }

  get engine() {
    return this.scene.getEngine();
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

    for (const dispose of this._disposes) {
      dispose();
    }
    this._disposes = [];
  }
}
