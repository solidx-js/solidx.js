import { Engine } from '@babylonjs/core/Engines/engine';
import { provide } from '@lit/context';
import { Context } from './Context';
import { customElement, property, query } from 'lit/decorators';
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map';
import { XRElement } from './XRElement';
import { randomID } from '../util';

export class XREngine extends XRElement {
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

  @provide({ context: Context.Engine })
  @property({ attribute: false })
  engine!: Engine;

  @property({ type: Number })
  width: number = 600;

  @property({ type: Number })
  height: number = 400;

  @query('[data-name=XREngine]')
  containerEle!: HTMLDivElement;

  connected(): void {
    const _canvas = document.createElement('canvas');
    _canvas.style.width = '100%';
    _canvas.style.height = '100%';

    this.engine = XREngine.createEngine(_canvas);
  }

  protected firstUpdated(): void {
    this.containerEle.appendChild(this.engine.getRenderingCanvas()!);
    this.engine.resize();
  }

  render() {
    return html`<div id=${this.ID} data-name="XREngine" style=${styleMap({ width: this.width + 'px', height: this.height + 'px' })}></div>`;
  }

  disconnected(): void {
    super.disconnected();
    this.engine.dispose();
  }
}
