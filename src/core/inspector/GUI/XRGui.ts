import { LitElement, css, html, unsafeCSS } from 'lit';
import { ElementRegistry, registerElement } from '../../../registry';
import { XRThinElement } from '../../XRElement';
import { ICON, STYLE } from './const';
import { Decorator } from '../../Decorator';
import { Scene } from '@babylonjs/core/scene';
import { state } from 'lit/decorators.js';

@registerElement('xr-gui')
export class XRGui extends XRThinElement {
  static styles = css`
    :host {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      max-height: 100%;
      overflow: auto;
      z-index: 9999;
      background-color: #fff;
      box-sizing: border-box;
      font-family: ${unsafeCSS(STYLE.fontFamily)};
      font-size: 14px;
    }

    button {
      padding: 0 8px;
      height: 20px;
      box-sizing: border-box;
      border: none;
      border-radius: 4px;
      color: ${unsafeCSS(STYLE.primary)};
      background: #fff;
      cursor: pointer;
      outline: none;
      font-size: 14px;
      line-height: 1;
      border: 1px solid ${unsafeCSS(STYLE.primary)};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:hover {
      background: ${unsafeCSS(STYLE.primary)};
      color: #fff;
    }

    .header {
      padding: 4px 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header > .band {
      flex: 1;
      width: 1px;
      font-weight: bold;
    }

    .header > .band > a {
      color: ${unsafeCSS(STYLE.primary)};
      text-decoration: underline;
      text-transform: uppercase;
    }

    .header > .action {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    :host(.collapsed) .header {
      border-bottom: 1px solid #ddd;
    }

    .body {
    }
  `;

  @Decorator.scene()
  scene!: Scene;

  @state()
  private _collapsed = false;

  connectedCallback(): void {
    super.connectedCallback();

    Promise.all([import('./XRGuiController'), import('./XRGuiFolder')]).then(() => {
      ElementRegistry.Instance.apply(true);
    });
  }

  protected createRenderRoot(): any {
    return (LitElement.prototype as any).createRenderRoot.call(this);
  }

  private _handleCapture = () => {
    this.scene.capture().then(url => {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'screenshot.png';
      a.click();
    });
  };

  render() {
    return html`
      <div class="header">
        <div class="band">
          <a href="https://github.com/solidx-js/solidx.js" target="_blank"> solidx.js </a>
        </div>
        <div class="action">
          <button title="截图" @click=${this._handleCapture}>${ICON.camera}</button>
          <button title="展开/收起" @click=${() => (this._collapsed = !this._collapsed)}>${this._collapsed ? ICON.down : ICON.up}</button>
        </div>
      </div>

      ${this._collapsed
        ? null
        : html`
            <div class="body">
              <slot></slot>
            </div>
          `}
    `;
  }
}
