import { Scene } from '@babylonjs/core';
import { XREntity } from './XREntity';
import { XREngine } from './XREngine';

export class XRScene extends XREntity {
  private _scene: Scene | null = null;

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

  init(): void {
    super.init();

    this._scene = new Scene(this.engine);
    this.engine.runRenderLoop(this._doRender);
  }

  remove(): void {
    super.remove();

    this._scene?.dispose();
    this.engine.stopRenderLoop(this._doRender);
  }
}
