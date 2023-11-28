import { Engine } from '@babylonjs/core/Engines/engine';
import { XREntity } from './XREntity';

export class XREngine extends XREntity {
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

  get engine() {
    return this._engine;
  }

  get name() {
    return 'XREngine';
  }

  init(): void {
    super.init();

    // 设置自己的 style
    this.style.display = 'block';
    this.style.width = `${this.getAttribute('width') || window.innerWidth}px`;
    this.style.height = `${this.getAttribute('height') || window.innerHeight}px`;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    this.appendChild(canvas);

    this._engine = XREngine.createEngine(canvas);
  }

  remove(): void {
    super.remove();

    this._engine?.dispose();
  }
}
