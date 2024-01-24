import { state } from 'lit/decorators.js';
import { registerElement } from '../../../registry';
import { Decorator } from '../../Decorator';
import { XRThinElement } from '../../XRElement';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { Scene } from '@babylonjs/core/scene';
import { ICON } from './icon';
import { STYLE } from './style';

@registerElement('xr-gui-header')
export class XRGuiHeader extends XRThinElement {
  static styles = [
    STYLE,
    css`
      :host {
        padding: 4px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      :host > .band {
        flex: 1;
        width: 1px;
        font-weight: bold;
      }

      :host > .band > a {
        color: var(--primary-color);
        text-decoration: underline;
        text-transform: uppercase;
      }

      :host > .action {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `,
  ];

  @Decorator.scene()
  scene!: Scene;

  @state()
  collapsed = false;

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

  private _handleToggleCollapsed = () => {
    this.emit('toggle-collapsed' as any, { collapsed: !this.collapsed });
  };

  render() {
    return html`
      <div class="band">
        <a href="https://github.com/solidx-js/solidx.js" target="_blank"> solidx.js </a>
      </div>
      <div class="action">
        <button title="截图" @click=${this._handleCapture}>${ICON.camera}</button>
        <button title="展开/收起" @click=${this._handleToggleCollapsed}>${this.collapsed ? ICON.up : ICON.down}</button>
      </div>
    `;
  }
}
