import { Scene } from '@babylonjs/core/scene';
import { XREntity } from './XREntity';
import { XREngine } from './XREngine';
import { System } from '../system';
import { difference, range } from 'lodash';
import { Schema } from '../util';
import { SystemRegistry } from '../registry';

export class XRScene extends XREntity {
  private _scene: Scene | null = null;
  private _systems: Record<string, System> = {};

  get engine() {
    const d = this.closest<XREngine>('xr-engine')?.engine;
    if (!d) throw new Error('XRScene: xr-engine not found');
    return d;
  }

  get scene() {
    return this._scene;
  }

  get name() {
    return 'XRScene';
  }

  private _doRender = () => {
    if (!this._scene || !this._scene.activeCamera) return;
    this._scene.render();
  };

  private _flushSystems() {
    const existKeys = Object.keys(this._systems);
    const newKeys = range(this.attributes.length).map(i => this.attributes[i].name);

    const removedKeys = difference(existKeys, newKeys);
    const addedKeys = difference(newKeys, existKeys);
    const updatedKeys = difference(newKeys, addedKeys);

    // 1. Remove system that are no longer in the entity
    for (const key of removedKeys) {
      this._systems[key].remove();
    }

    const _getValue = (Comp: typeof System, key: string) => {
      return Schema.parse(Comp.schema, this.getAttribute(key) || Comp.schema.default);
    };

    // 2. Add new system
    for (const key of addedKeys) {
      const Sys = SystemRegistry.Instance.get(key);
      if (!Sys) continue;

      const ins = new Sys(this, key);
      this._systems[key] = ins;
      ins.init();

      const value = _getValue(Sys, key);
      ins.flush(value);
    }

    // 3. Update existing system
    for (const key of updatedKeys) {
      const Sys = SystemRegistry.Instance.get(key);
      if (!Sys) continue;

      const value = _getValue(Sys, key);
      this._systems[key].flush(value);
    }
  }

  init(): void {
    super.init();

    this._scene = new Scene(this.engine);

    // for debug
    this._scene.debugLayer.show();

    // 挂载默认 system
    this.setAttribute('mesh-system', '');
    this._flushSystems();

    this.engine.runRenderLoop(this._doRender);
  }

  update(attr: string | null, oldVal: string | null, newVal: string | null): void {
    super.update(attr, oldVal, newVal);
    this._flushSystems();
  }

  remove(): void {
    super.remove();

    this._scene?.dispose();
    this.engine.stopRenderLoop(this._doRender);
  }
}
