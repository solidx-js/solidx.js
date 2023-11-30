import { Scene } from '@babylonjs/core/scene';
import { XRElement } from './XRElement';
import { customElement, property } from 'lit/decorators';
import { consume, provide } from '@lit/context';
import { Context } from './Context';
import { Engine } from '@babylonjs/core/Engines/engine';
import { EnvironmentHelper } from '@babylonjs/core/Helpers/environmentHelper';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { MeshSystem } from '../system';

export class XRScene extends XRElement {
  @provide({ context: Context.Scene })
  @property({ attribute: false })
  scene!: Scene;

  @consume({ context: Context.Engine, subscribe: true })
  @property({ attribute: false })
  engine!: Engine;

  private _doRender = () => {
    if (!this.scene.activeCamera) return;
    this.scene.render();
  };

  connected(): void {
    super.connected();

    this.scene = new Scene(this.engine);

    this.scene.systems = {
      mesh: new MeshSystem(this.scene),
    };

    new EnvironmentHelper({ createSkybox: true }, this.scene);

    const cam = new ArcRotateCamera('camera', Math.PI / 4, Math.PI / 3, 10, new Vector3(0, 0, 0), this.scene);
    cam.attachControl();

    this.engine.runRenderLoop(this._doRender);
  }

  protected firstUpdated(): void {
    this.scene.debugLayer.show(); // for debug
  }

  disconnected(): void {
    super.disconnected();

    this.scene?.dispose();
    this.engine.stopRenderLoop(this._doRender);
  }
}
