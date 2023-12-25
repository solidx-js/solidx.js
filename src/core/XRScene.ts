import { Scene } from '@babylonjs/core/scene';
import { XRElement } from './XRElement';
import { query, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { Context } from './Context';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Decorator } from './Decorator';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { EntityQueryController, PointerController, StyleSelectorController } from './controller';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { html } from 'lit';
import { randomID } from '../util';
import { styleMap } from 'lit/directives/style-map.js';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';

export class XRScene extends XRElement {
  static createEngine(canvas: HTMLCanvasElement) {
    const engine = new Engine(canvas, true, { stencil: true, antialias: true, adaptToDeviceRatio: true, doNotHandleContextLost: true });

    // 禁用内置 loading
    engine.loadingScreen = {
      displayLoadingUI: () => {},
      hideLoadingUI: () => {},
      loadingUIBackgroundColor: '',
      loadingUIText: '',
    };

    return engine;
  }

  static defaultEnvMap = new URL('../assets/EnvMap_3.0-256.env', import.meta.url).href;

  readonly ID = randomID();
  readonly querier = new EntityQueryController(this);

  engine!: Engine;

  @provide({ context: Context.Scene })
  @state()
  scene: Scene = null as any;

  @Decorator.property('Color4', 'background', new Color4(1, 1, 1, 0))
  background: Color4 = new Color4(1, 1, 1, 0);

  @Decorator.property('Number', 'width', 600)
  width: number = 600;

  @Decorator.property('Number', 'height', 400)
  height: number = 400;

  @Decorator.property('String', 'env-url', XRScene.defaultEnvMap)
  envUrl: string = XRScene.defaultEnvMap;

  @Decorator.property('Number', 'env-rotation-y', 0)
  envRotationY = 0;

  @Decorator.property('Number', 'env-intensity', 1)
  envIntensity = 1;

  @Decorator.property('Number', 'contrast', 1.2)
  contrast = 1.2;

  @Decorator.property('Number', 'exposure', 1.2)
  exposure = 1.2;

  @Decorator.property('Boolean', 'auto-resize', false)
  autoResize = false;

  @query('.xr-canvas-wrapper')
  private containerEle!: HTMLDivElement;

  private _doRender = () => {
    if (!this.scene.activeCamera) return;
    this.scene.render();
  };

  private reCalcContainerSize() {
    const rect = this.getBoundingClientRect();
    if (rect.width && rect.height) {
      this.width = rect.width;
      this.height = rect.height;
    }
  }

  connected(): void {
    super.connected();

    this.style.display = 'block';
    this.style.position = 'relative';
    this.style.width = '100%';
    this.style.height = '100%';

    const _canvas = document.createElement('canvas');
    _canvas.style.width = '100%';
    _canvas.style.height = '100%';
    _canvas.style.outline = 'none';

    this.engine = XRScene.createEngine(_canvas);
    this.logger.info('Engine %s created', this.ID);

    this.scene = new Scene(this.engine);
    this.scene.autoClear = true;
    this.scene.clearColor = new Color4(0, 0, 0, 0); // 默认透明背景

    // FIXME: 一定要提前设置好环境贴图，否则后面不会生效（即使重新标记 material markAsDirty）。why?
    this.scene.environmentTexture = CubeTexture.CreateFromPrefilteredData(XRScene.defaultEnvMap, this.scene);

    // 默认材质
    const defaultMaterial = new PBRMaterial('default', this.scene);
    defaultMaterial.metallic = 0.2;
    defaultMaterial.roughness = 0.8;

    this.scene.defaultMaterial = defaultMaterial;

    if (this.autoResize) this.reCalcContainerSize();
    this.engine.runRenderLoop(this._doRender);

    // 放到最后
    new StyleSelectorController(this);
    new PointerController(this);
  }

  protected firstUpdated(): void {
    this.containerEle.appendChild(this.engine.getRenderingCanvas()!);
    if (this.autoResize) this.reCalcContainerSize();

    if (this.inspect) {
      const m = import('@babylonjs/inspector');

      if ((m as any).then) {
        m.then(() => {
          this.scene.debugLayer.show();
        });
      } else {
        this.scene.debugLayer.show();
      }
    }
  }

  protected updated(_changed: Map<string, any>): void {
    if (_changed.has('width') || _changed.has('height')) this.engine.resize();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('contrast')) {
      this.scene.imageProcessingConfiguration.contrast = this.evaluated.contrast;
    }

    if (changed.has('exposure')) {
      this.scene.imageProcessingConfiguration.exposure = this.evaluated.exposure;
    }

    if (changed.has('envUrl') && this.scene.environmentTexture instanceof CubeTexture) {
      this.scene.environmentTexture.updateURL(this.evaluated.envUrl);
    }

    if (changed.has('envRotationY') && this.scene.environmentTexture instanceof CubeTexture) {
      this.scene.environmentTexture.rotationY = this.evaluated.envRotationY * (Math.PI / 180);
    }

    if (changed.has('envIntensity')) {
      this.scene.environmentIntensity = this.evaluated.envIntensity;
    }
  }

  disconnected(): void {
    super.disconnected();
    this.engine.dispose();

    this.logger.info('Engine %s disposed', this.ID);
  }

  render() {
    return html`
      <div
        id=${this.ID}
        class="xr-canvas-wrapper"
        style=${styleMap({ width: this.width + 'px', height: this.height + 'px', background: this.background.toHexString() })}
      ></div>
    `;
  }
}
