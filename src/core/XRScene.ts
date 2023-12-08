import { Scene } from '@babylonjs/core/scene';
import { XRElement } from './XRElement';
import { property } from 'lit/decorators.js';
import { consume, provide } from '@lit/context';
import { Context } from './Context';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Decorator } from './Decorator';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { RefController } from './controller';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';

export class XRScene extends XRElement {
  private _environmentTextureRefCtrl = new RefController(
    this as any,
    'texture',
    () => this.environmentTexture || null,
    texture => {
      this.scene.environmentTexture = texture;
    },
    async ref => {
      const tex = CubeTexture.CreateFromPrefilteredData(ref, this.scene);
      return { entity: tex, dispose: () => tex.dispose() };
    }
  );

  private _ssaoPipeline: SSAO2RenderingPipeline | null = null;

  @provide({ context: Context.Scene })
  @property({ attribute: false })
  scene!: Scene;

  @consume({ context: Context.Engine, subscribe: true })
  @property({ attribute: false })
  engine!: Engine;

  @Decorator.property_Color4('clear-color')
  clearColor?: Color4;

  @Decorator.property_String()
  environmentTexture?: string;

  @Decorator.property_Number()
  contrast = 1;

  @Decorator.property_Number()
  exposure = 1;

  @Decorator.property_Object()
  ssao?: any;

  private _doRender = () => {
    if (!this.scene.activeCamera) return;
    this.scene.render();
  };

  connected(): void {
    super.connected();

    this.scene = new Scene(this.engine);
    this.scene.autoClear = true;

    this.engine.runRenderLoop(this._doRender);
  }

  protected firstUpdated(): void {
    // this.scene.debugLayer.show(); // for debug
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('clearColor')) {
      this.scene.clearColor = this.clearColor ?? new Color4(0.2, 0.2, 0.3, 1.0);
    }

    if (changed.has('contrast')) {
      this.scene.imageProcessingConfiguration.contrast = this.contrast;
    }

    if (changed.has('exposure')) {
      this.scene.imageProcessingConfiguration.exposure = this.exposure;
    }

    if (changed.has('ssao')) {
      if (this.ssao && !this._ssaoPipeline) {
        this._ssaoPipeline = new SSAO2RenderingPipeline('SSAO2 rendering pipeline', this.scene, 1, this.scene.cameras);
      }

      if (!this.ssao && this._ssaoPipeline) {
        this._ssaoPipeline.dispose();
        this._ssaoPipeline = null;
      }

      if (this.ssao && this._ssaoPipeline) {
        Object.assign(this._ssaoPipeline, this.ssao);
      }
    }
  }

  disconnected(): void {
    super.disconnected();

    this.scene?.dispose();
    this.engine.stopRenderLoop(this._doRender);
  }
}
