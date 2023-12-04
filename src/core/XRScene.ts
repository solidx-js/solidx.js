import { Scene } from '@babylonjs/core/scene';
import { XRElement } from './XRElement';
import { property } from 'lit/decorators';
import { consume, provide } from '@lit/context';
import { Context } from './Context';
import { Engine } from '@babylonjs/core/Engines/engine';
import { EnvironmentHelper } from '@babylonjs/core/Helpers/environmentHelper';
import { EntitySystem, MeshSystem } from '../system';
import { Decorator } from './Decorator';
import { Color4 } from '@babylonjs/core/Maths/math.color';

export class XRScene extends XRElement {
  @provide({ context: Context.Scene })
  @property({ attribute: false })
  scene!: Scene;

  @consume({ context: Context.Engine, subscribe: true })
  @property({ attribute: false })
  engine!: Engine;

  @Decorator.property_Color4('clear-color')
  clearColor?: Color4;

  private _doRender = () => {
    if (!this.scene.activeCamera) return;
    this.scene.render();
  };

  connected(): void {
    super.connected();

    this.scene = new Scene(this.engine);
    this.scene.autoClear = true;

    this.scene.systems = {
      mesh: new MeshSystem(this.scene),
      entity: new EntitySystem(this.scene),
    };

    new EnvironmentHelper({ createSkybox: false }, this.scene);

    this.engine.runRenderLoop(this._doRender);
  }

  protected firstUpdated(): void {
    this.scene.debugLayer.show(); // for debug
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('clearColor')) {
      this.scene.clearColor = this.clearColor ?? new Color4(0.2, 0.2, 0.3, 1.0);
    }
  }

  disconnected(): void {
    super.disconnected();

    this.scene?.dispose();
    this.engine.stopRenderLoop(this._doRender);
  }
}
