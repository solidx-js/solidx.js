import { LitElement, css, html } from 'lit';
import { registerElement } from '../../../registry';
import { XRElement, XRThinElement } from '../../XRElement';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { IDataType } from '../../../util/Schema';

@registerElement('xr-editor-gui')
export class XREditorGUI extends XRThinElement {
  static styles = css`
    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }
    .property-panel {
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      max-height: 100%;
      overflow: auto;
      background: #fff;
      pointer-events: auto;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }

    .cell {
      display: flex;
      align-items: center;
      padding: 0 10px;
      height: 32px;
      border-bottom: 1px solid #ddd;
    }

    .cell__label {
      flex: 0 0 80px;
      font-size: 14px;
      color: #666;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .cell__value {
      flex: 1;
      font-size: 14px;
      color: #333;
    }
  `;

  @property({} as any)
  activeElement: XRElement | null = null;

  protected createRenderRoot(): any {
    return (LitElement.prototype as any).createRenderRoot.call(this);
  }

  renderPropertyPanel() {
    return html`<div class="property-panel">
      <div class="property-panel__header">属性面板</div>
      <div class="property-panel__body">${this.activeElement ? this.renderElementInfo(this.activeElement) : null}</div>
    </div>`;
  }

  renderElementInfo(ele: XRElement) {
    const propEntries: { key: string; label: string; value: any; dType: IDataType }[] = [];

    for (const [prop, def] of ele._Cls.elementProperties.entries()) {
      if (def.state) continue;

      const label = def.attribute ? def.attribute.toString() : prop.toString();
      const value = (ele.evaluated as any)[prop];
      propEntries.push({ key: prop.toString(), label, value, dType: def.dType });
    }

    const listNodes = repeat(
      propEntries,
      item => item.key,
      item => {
        return html`<div class="cell">
          <div class="cell__label" title="${item.label}">${item.label}</div>
          <div class="cell__value">
            <xr-field-ctrl
              data-type="${item.dType}"
              .value=${item.value}
              @change=${(e: any) => this.emit('change', { ele, prop: item.key, value: e.detail.value })}
            ></xr-field-ctrl>
          </div>
        </div>`;
      }
    );

    return html`<div class="cell">
        <div class="cell__label">名称</div>
        <div class="cell__value">${ele.displayText}</div>
      </div>
      ${listNodes}`;
  }

  render() {
    return html`${this.renderPropertyPanel()} `;
  }
}
