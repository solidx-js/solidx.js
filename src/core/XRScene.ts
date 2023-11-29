import { Scene } from '@babylonjs/core/scene';
import type { XREngine } from './XREngine';
import { AssetsSystem, MeshSystem } from '../system';
import { XRElement } from './XRElement';
import { ArcRotateCamera, EnvironmentHelper, Vector3 } from '@babylonjs/core';

export class XRScene extends XRElement {
  private _scene: Scene | null = null;
  system: { assets: AssetsSystem; mesh: MeshSystem } = {} as any;

  get engine() {
    const ret = this.closest<XREngine>('xr-engine')!.engine;
    if (!ret) throw new Error('Entity: XREngine not found');
    return ret;
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

    this.system.assets = new AssetsSystem(this, 'assets');
    this.system.mesh = new MeshSystem(this, 'mesh');

    this._scene.debugLayer.show(); // for debug

    new EnvironmentHelper({ createSkybox: true }, this._scene);

    const cam = new ArcRotateCamera('camera', Math.PI / 4, Math.PI / 3, 10, new Vector3(0, 0, 0), this._scene);
    cam.attachControl();

    this.engine.runRenderLoop(this._doRender);
  }

  remove(): void {
    super.remove();

    this._scene?.dispose();
    this.engine.stopRenderLoop(this._doRender);
  }
}
