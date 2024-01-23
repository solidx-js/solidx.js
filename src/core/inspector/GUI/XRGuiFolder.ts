import { state } from 'lit/decorators.js';
import { registerElement } from '../../../registry';
import { Decorator } from '../../Decorator';
import { XRThinElement } from '../../XRElement';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { TagRefController } from '../../controller';
import { repeat } from 'lit/directives/repeat.js';
import { Scene } from '@babylonjs/core/scene';
import { IDataTypeMap } from '../../../util';
import { ICON, STYLE } from './const';

@registerElement('xr-gui-folder')
export class XRGuiFolder extends XRThinElement {
  static styles = css`
    :host {
    }

    .header {
      display: flex;
      align-items: center;

      background-color: #eee;
      padding: 4px 8px;
      cursor: pointer;
      font-weight: bold;
      font-size: 12px;
      user-select: none;
      border-bottom: 1px solid transparent;
      font-family: ${unsafeCSS(STYLE.fontFamily)}};
    }

    :host(.collapsed) .header {
      border-bottom: 1px solid ${unsafeCSS(STYLE.headerBg)};
    }

    .body {
      padding: 4px 8px;
    }
  `;

  @Decorator.property('String', 'label', null)
  label: string | null = null;

  @Decorator.property('URI', 'source', null)
  source: IDataTypeMap['URI'] | null = null;

  @Decorator.scene()
  scene!: Scene;

  @state()
  _source: XRThinElement | null = null;

  @state()
  private _collapsed = false;

  constructor() {
    super();
    new TagRefController(this, 'source', '_source', null);
  }

  protected createRenderRoot(): any {
    return (LitElement.prototype as any).createRenderRoot.call(this);
  }

  renderBody() {
    const list: { key: string; ele: any }[] = [];

    if (this._source) {
      // 渲染属性列表
      for (const [key, def] of this._source._Cls.elementProperties.entries()) {
        if (def.state || typeof key !== 'string') continue;

        const _attr = typeof def.attribute === 'string' ? def.attribute : key;
        list.push({
          key,
          ele: html`<xr-gui-controller ._source=${this._source} attr=${_attr}></xr-gui-controller>`,
        });
      }

      list.sort((a, b) => a.key.localeCompare(b.key));
    }

    return html`
      <div class="body">
        ${repeat(
          list,
          item => item.key,
          item => item.ele
        )}
        <slot></slot>
      </div>
    `;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('_collapsed')) {
      this.classList.toggle('collapsed', this._collapsed);
    }
  }

  render() {
    const label = this.label || this._source?.displayText || 'Folder';

    return html`
      <div class="header" @click=${() => (this._collapsed = !this._collapsed)}>
        ${this._collapsed ? ICON.right : ICON.down}
        <span style="margin-left: 4px">${label}</span>
      </div>
      ${this._collapsed ? null : this.renderBody()}
    `;
  }
}
