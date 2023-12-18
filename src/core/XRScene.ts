import { Scene } from '@babylonjs/core/scene';
import { XRElement } from './XRElement';
import { property, query, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { Context } from './Context';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Decorator } from './Decorator';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { PointerController, RefController2, StyleSelectorController } from './controller';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
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
  engine: Engine;

  @provide({ context: Context.Scene })
  @state()
  scene: Scene;

  @Decorator.property('Number', 'width', 600)
  width: number = 600;

  @Decorator.property('Number', 'height', 400)
  height: number = 400;

  @Decorator.property('String', 'environment-texture', XRScene.defaultEnvMap)
  environmentTexture: string = `url: ${XRScene.defaultEnvMap}`;

  @Decorator.property('Number', 'environment-intensity', 1)
  contrast = 1.6;

  @Decorator.property('Number', 'exposure', 1.2)
  exposure = 1.2;

  @Decorator.property('Object', 'ssao', null)
  ssao?: any;

  @Decorator.property('Boolean', 'auto-resize', false)
  autoResize?: boolean;

  @state()
  _environmentTexture: CubeTexture | null = null;

  @query('.xr-canvas-wrapper')
  private containerEle!: HTMLDivElement;

  private _ssaoPipeline: SSAO2RenderingPipeline | null = null;

  constructor() {
    super();

    new RefController2(this, 'cube-texture', 'environmentTexture', '_environmentTexture');
    new StyleSelectorController(this);
    new PointerController(this);

    this.style.display = 'block';
    this.style.width = '100%';
    this.style.height = '100%';

    if (this.autoResize) this.reCalcContainerSize();

    const _canvas = document.createElement('canvas');
    _canvas.style.width = '100%';
    _canvas.style.height = '100%';
    _canvas.style.outline = 'none';

    this.engine = XRScene.createEngine(_canvas);
    this.logger.info('Engine %s created', this.ID);

    this.scene = new Scene(this.engine);
    this.scene.autoClear = true;
    this.scene.clearColor = new Color4(0, 0, 0, 0); // 默认透明背景

    this.scene.imageProcessingConfiguration.toneMappingEnabled = true;

    // 默认材质
    const defaultMaterial = new PBRMaterial('default', this.scene);
    defaultMaterial.metallic = 0.2;
    defaultMaterial.roughness = 0.8;

    this.scene.defaultMaterial = defaultMaterial;
  }

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

    this.engine.runRenderLoop(this._doRender);
  }

  protected firstUpdated(): void {
    this.containerEle.appendChild(this.engine.getRenderingCanvas()!);
    if (this.autoResize) this.reCalcContainerSize();

    if (this.inspect) {
      import('@babylonjs/inspector').then(() => {
        this.scene.debugLayer.show(); // for debug
      });
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

    if (changed.has('_environmentTexture')) this.scene.environmentTexture = this._environmentTexture;
  }

  disconnected(): void {
    super.disconnected();
    this.engine.dispose();

    this.logger.info('Engine %s disposed', this.ID);
  }

  render() {
    return html`
      <div id=${this.ID} class="xr-canvas-wrapper" style=${styleMap({ width: this.width + 'px', height: this.height + 'px' })}></div>
    `;
  }
}
