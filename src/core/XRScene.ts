import { Scene } from '@babylonjs/core/scene';
import { XREntity } from './XREntity';
import { XREngine } from './XREngine';
import { AssetsSystem } from '../system';

export class XRScene extends XREntity {
  private _scene: Scene | null = null;
  _system: { assets: AssetsSystem } = null as any;

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
    this._scene.debugLayer.show(); // for debug

    this._system = {
      assets: new AssetsSystem(this, 'assets'),
    };

    this.engine.runRenderLoop(this._doRender);
  }

  remove(): void {
    super.remove();

    this._scene?.dispose();
    Object.values(this.system).forEach(sys => sys.remove());

    this.engine.stopRenderLoop(this._doRender);
  }
}
