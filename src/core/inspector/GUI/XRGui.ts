import { LitElement, css, html } from 'lit';
import { ElementRegistry, registerElement } from '../../../registry';
import { XRThinElement } from '../../XRElement';
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

      display: flex;
      flex-direction: column;

      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }

    .header {
    }

    .body {
      flex: 1;
      height: 1px;
      overflow: auto;
    }
  `;

  @Decorator.scene()
  scene!: Scene;

  @state()
  private _collapsed = false;

  connectedCallback(): void {
    super.connectedCallback();

    // this.style.position = 'absolute';
    // this.style.top = '0';
    // this.style.right = '0';
    // this.style.width = '300px';
    // this.style.maxHeight = '100%';
    // this.style.overflow = 'auto';
    // this.style.zIndex = '9999';
    // this.style.backgroundColor = '#fff';
    // this.style.boxSizing = 'border-box';

    Promise.all([import('./XRGuiController'), import('./XRGuiHeader'), import('./XRGuiFolder')]).then(() => {
      ElementRegistry.Instance.apply(true);
    });
  }

  protected createRenderRoot(): any {
    return (LitElement.prototype as any).createRenderRoot.call(this);
  }

  render() {
    return html`
      <xr-gui-header
        class="header"
        .collapsed=${this._collapsed}
        @toggle-collapsed=${() => (this._collapsed = !this._collapsed)}
      ></xr-gui-header>

      ${this._collapsed ? null : html`<div class="body"><slot></slot></div> `}
    `;
  }
}
