import { Scene } from '@babylonjs/core/scene';
import { XRElement } from './XRElement';
import { property, query } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { Context } from './Context';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Decorator } from './Decorator';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { RefController } from './controller';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { html } from 'lit';
import { randomID } from '../util';
import { styleMap } from 'lit/directives/style-map.js';

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

  readonly ID = randomID();
  engine: Engine;

  @provide({ context: Context.Scene })
  @property({ attribute: false })
  scene: Scene;

  @Decorator.property('Number')
  width: number = 600;

  @Decorator.property('Number')
  height: number = 400;

  @Decorator.property('String')
  environmentTexture?: string;

  @Decorator.property('Number')
  contrast = 1;

  @Decorator.property('Number')
  exposure = 1;

  @Decorator.property('Object')
  ssao?: any;

  @Decorator.property('Boolean', 'auto-resize')
  autoResize?: boolean;

  @query('.xr-canvas-wrapper')
  containerEle!: HTMLDivElement;

  private _ssaoPipeline: SSAO2RenderingPipeline | null = null;

  constructor() {
    super();

    new RefController(
      this as any,
      'texture',
      () => this.environmentTexture || null,
      texture => {
        this.scene.environmentTexture = texture;
      },
      ref => {
        const tex = CubeTexture.CreateFromPrefilteredData(ref, this.scene);
        return { entity: tex, dispose: () => tex.dispose() };
      }
    );

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

    // this.scene.debugLayer.show(); // for debug
  }

  protected updated(_changed: Map<string, any>): void {
    if (_changed.has('width') || _changed.has('height')) this.engine.resize();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

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
    this.engine.dispose();

    this.logger.info('Engine %s disposed', this.ID);
  }

  render() {
    return html`<div
      id=${this.ID}
      class="xr-canvas-wrapper"
      style=${styleMap({ width: this.width + 'px', height: this.height + 'px' })}
    ></div>`;
  }
}
