import { Scene } from '@babylonjs/core/scene';
import { XRElement } from './XRElement';
import { state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { Context } from './Context';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Decorator } from './Decorator';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { EntityQueryController, PointerController } from './controller';
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
  background: Color4 | null = null;

  @Decorator.property('String', 'env-url', null)
  envUrl: string | null = null;

  @Decorator.property('Number', 'env-rotation-y', null)
  envRotationY: number | null = null;

  @Decorator.property('Number', 'env-intensity', null)
  envIntensity: number | null = null;

  @Decorator.property('Number', 'contrast', 1.2)
  contrast: number | null = null;

  @Decorator.property('Number', 'exposure', 1.2)
  exposure: number | null = null;

  private _container: HTMLDivElement | null = null;

  private _doRender = () => {
    if (!this.scene.activeCamera) return;
    this.scene.render();
  };

  connected(): void {
    super.connected();

    this.style.display = 'block';
    this.style.position = 'relative';
    this.style.width = '100%';
    this.style.height = '100%';

    // create container
    this._container = document.createElement('div');
    this._container.id = this.ID;
    this._container.classList.add('xr-canvas-container');
    this._container.style.width = '100%';
    this._container.style.height = '100%';
    this.appendChild(this._container);

    // create canvas
    const _canvas = document.createElement('canvas');
    _canvas.style.width = '100%';
    _canvas.style.height = '100%';
    _canvas.style.outline = 'none';
    this._container.appendChild(_canvas);

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

    this.engine.runRenderLoop(this._doRender);

    // 放到最后
    new PointerController(this);
  }

  protected firstUpdated(): void {
    if (!this._container) return;

    const hostBounds = this.getBoundingClientRect();
    this._container.style.width = `${hostBounds.width}px`;
    this._container.style.height = `${hostBounds.height}px`;

    this.engine.resize();

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
      this.scene.imageProcessingConfiguration.contrast = this.evaluated.contrast || 1;
    }

    if (changed.has('exposure')) {
      this.scene.imageProcessingConfiguration.exposure = this.evaluated.exposure || 1;
    }

    if (changed.has('envUrl') && this.evaluated.envUrl && this.scene.environmentTexture instanceof CubeTexture) {
      this.scene.environmentTexture.updateURL(this.evaluated.envUrl);
    }

    if (changed.has('envRotationY') && this.scene.environmentTexture instanceof CubeTexture) {
      this.scene.environmentTexture.rotationY = (this.evaluated.envRotationY || 0) * (Math.PI / 180);
    }

    if (changed.has('envIntensity')) {
      this.scene.environmentIntensity = this.evaluated.envIntensity || 1;
    }

    if (changed.has('background') && this._container) {
      this._container.style.background = this.evaluated.background?.toHexString() || 'transparent';
    }
  }

  disconnected(): void {
    super.disconnected();
    this.engine.dispose();

    this.logger.info('Engine %s disposed', this.ID);
  }
}
