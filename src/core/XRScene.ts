import { Scene } from '@babylonjs/core/scene';
import { XRElement } from './XRElement';
import { customElement, property } from 'lit/decorators';
import { consume, provide } from '@lit/context';
import { Context } from './Context';
import { Engine } from '@babylonjs/core/Engines/engine';
import { EnvironmentHelper } from '@babylonjs/core/Helpers/environmentHelper';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

@customElement('xr-scene')
export class XRScene extends XRElement {
  static eleName = 'XRScene';

  @provide({ context: Context.Scene })
  @property({ attribute: false })
  scene!: Scene;

  @consume({ context: Context.Engine, subscribe: true })
  @property({ attribute: false })
  engine!: Engine;

  // system: { assets: AssetsSystem; mesh: MeshSystem } = {} as any;

  private _doRender = () => {
    if (!this.scene.activeCamera) return;
    this.scene.render();
  };

  init(): void {
    super.init();

    this.scene = new Scene(this.engine);

    // this.system.assets = new AssetsSystem(this, 'assets');
    // this.system.mesh = new MeshSystem(this, 'mesh');

    new EnvironmentHelper({ createSkybox: true }, this.scene);

    const cam = new ArcRotateCamera('camera', Math.PI / 4, Math.PI / 3, 10, new Vector3(0, 0, 0), this.scene);
    cam.attachControl();

    this.engine.runRenderLoop(this._doRender);
  }

  protected firstUpdated(): void {
    this.scene.debugLayer.show(); // for debug
  }

  remove(): void {
    super.remove();

    this.scene?.dispose();
    this.engine.stopRenderLoop(this._doRender);
  }
}
