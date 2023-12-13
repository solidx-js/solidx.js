import { Engine } from '@babylonjs/core/Engines/engine';
import { provide } from '@lit/context';
import { Context } from './Context';
import { property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { XRElement } from './XRElement';
import { randomID } from '../util';
import { Decorator } from './Decorator';

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

  @Decorator.property('Number')
  width: number = 600;

  @Decorator.property('Number')
  height: number = 400;

  @Decorator.property('Boolean', 'auto-resize')
  autoResize?: boolean;

  @query('[data-name=XREngine]')
  containerEle!: HTMLDivElement;

  connected(): void {
    super.connected();

    this.style.display = 'block';
    this.style.width = '100%';
    this.style.height = '100%';

    if (this.autoResize) this.reCalcContainerSize();

    const _canvas = document.createElement('canvas');
    _canvas.style.width = '100%';
    _canvas.style.height = '100%';
    _canvas.style.outline = 'none';

    this.engine = XREngine.createEngine(_canvas);
    this.logger.info('XREngine created');
  }

  protected firstUpdated(): void {
    this.containerEle.appendChild(this.engine.getRenderingCanvas()!);
    this.engine.resize();

    if (this.autoResize) this.reCalcContainerSize();
  }

  protected updated(_changed: Map<string, any>): void {
    if (_changed.has('width') || _changed.has('height')) this.engine.resize();
  }

  private reCalcContainerSize() {
    const rect = this.getBoundingClientRect();
    if (rect.width && rect.height) {
      this.width = rect.width;
      this.height = rect.height;
    }
  }

  render() {
    return html`<div id=${this.ID} data-name="XREngine" style=${styleMap({ width: this.width + 'px', height: this.height + 'px' })}></div>`;
  }

  disconnected(): void {
    super.disconnected();
    this.engine.dispose();
  }
}
