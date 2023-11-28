import { Engine } from '@babylonjs/core/Engines/engine';
import { XRNode } from './XRNode';

export class XREngine extends XRNode {
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

  private _engine: Engine | null = null;
  private _container: HTMLDivElement | null = null;

  get engine() {
    return this._engine;
  }

  get name() {
    return 'XREngine';
  }

  init(): void {
    super.init();

    const width = this.getAttribute('width') || window.innerWidth;
    const height = this.getAttribute('height') || window.innerHeight;

    // 设置自己的 style
    this.style.display = 'block';
    this.style.width = `${width}px`;
    this.style.height = `${height}px`;

    // 创建 container
    this._container = document.createElement('div');
    this._container.style.width = `${width}px`;
    this._container.style.height = `${height}px`;
    this.appendChild(this._container);

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    this._container.appendChild(canvas);

    this._engine = XREngine.createEngine(canvas);
  }

  remove(): void {
    super.remove();

    this._engine?.dispose();
  }
}
