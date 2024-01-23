import { state } from 'lit/decorators.js';
import { registerElement } from '../../../registry';
import { Decorator } from '../../Decorator';
import { XRThinElement } from '../../XRElement';
import { TagRefController } from '../../controller';
import { LitElement, PropertyDeclaration, css, html, unsafeCSS } from 'lit';
import { IDataType, IDataTypeMap, Schema, URIUtil } from '../../../util';
import camelCase from 'lodash/camelCase';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';
import { Scene } from '@babylonjs/core/scene';
import { repeat } from 'lit/directives/repeat.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { STYLE } from './const';

@registerElement('xr-gui-controller')
export class XRGuiController extends XRThinElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 4px;

      font-family: ${unsafeCSS(STYLE.fontFamily)};
      font-size: 12px;
    }

    :host(:last-child) {
      margin-bottom: 0;
    }

    :host(.hidden) {
      display: none;
    }

    .label {
      width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      user-select: none;

      font-family: ${unsafeCSS(STYLE.fontFamilyCode)};
    }

    .input {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    :host([data-dtype='Boolean']) .label {
      width: 1px;
      flex: 1;
    }

    :host([data-dtype='Boolean']) .input {
      flex: unset;
    }

    .input > input {
      width: 100%;
      box-sizing: border-box;
    }

    .input > select {
      width: 100%;
      box-sizing: border-box;
    }

    .input > [type='checkbox'] {
      width: auto;
      margin: 0;
    }
  `;

  @Decorator.property('URI', 'source', null)
  source: IDataTypeMap['URI'] | null = null;

  @Decorator.property('String', 'attr', null)
  attr: string | null = null;

  @Decorator.scene()
  scene!: Scene;

  @state()
  _source: XRThinElement | null = null;

  // attr 的计算属性
  private _property: string | null = null;

  constructor() {
    super();

    new TagRefController(this, 'source', '_source', null);
  }

  protected createRenderRoot(): any {
    return (LitElement.prototype as any).createRenderRoot.call(this);
  }

  connectedCallback(): void {
    super.connectedCallback();

    // 监听 source 的变化
    this.scene.bindingElement.addEventListener('change', this._handleSourceChange);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('attr')) {
      this._property = this.attr ? camelCase(this.attr) : null;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.scene.bindingElement.removeEventListener('change', this._handleSourceChange);
  }

  private _handleSourceChange = (ev: Event) => {
    if (ev instanceof CustomEvent && ev.target === this._source && ev.detail.changed.has(this._property)) {
      this.requestUpdate();
    }
  };

  private toggleVisible(visible: boolean) {
    this.classList.toggle('hidden', !visible);
  }

  render() {
    if (!this._source || !this.attr || !this._property) {
      this.toggleVisible(false);
      return null;
    }

    const _source = this._source;
    const _attr = this.attr;
    const property = this._property;

    const def = this._source._Cls.getPropertyOptions(property);
    if (!def || def.state || def.extra?.hidden) {
      this.toggleVisible(false);
      return null;
    }

    const label = _attr;
    const value = (this._source.evaluated as any)[property];

    this.toggleVisible(true);
    this.dataset.dtype = def.dType;

    return html`
      <div class="label" title="${label}">${label}</div>
      <div class="input">
        ${renderInput(def, value, newValue => {
          const _literal = Schema.toAttr(def.dType, newValue);
          if (_literal === null) _source.removeAttribute(_attr);
          else _source.setAttribute(_attr, _literal);
        })}
      </div>
    `;
  }
}

function renderInput(def: PropertyDeclaration, value: any, onChange: (newValue: any) => any, style: StyleInfo = {}): any {
  const dType = def.dType;
  const { min, max, step, enums, uriPreset } = def.extra || {};

  // String
  if (dType === 'String') {
    return html`<input
      type="text"
      .value=${value}
      style=${styleMap(style)}
      @change=${(ev: InputEvent) => {
        ev.stopPropagation();
        onChange((ev.target as HTMLInputElement).value);
      }}
    />`;
  }

  // Number
  if (dType === 'Number') {
    const _onNumberChange = (ev: InputEvent) => {
      ev.stopPropagation();
      onChange(Number((ev.target as HTMLInputElement).value));
    };

    if (typeof min === 'number' && typeof max === 'number') {
      const _step = typeof step === 'number' ? step : (max - min) / 100;

      const _rangeInput = html`<input
        type="range"
        .value=${value}
        min=${min}
        max=${max}
        step=${_step}
        @input=${_onNumberChange}
        @change=${_onNumberChange}
        style="flex: 1; width: 1px"
      />`;

      const _numberInput = html`<input
        type="number"
        .value=${value}
        min=${min}
        max=${max}
        step=${_step}
        @input=${_onNumberChange}
        @change=${_onNumberChange}
        style="width: 60px;"
      />`;

      return html`${_rangeInput}${_numberInput}`;
    }

    return html`<input
      type="number"
      .value=${value}
      style=${styleMap(style)}
      min=${typeof min === 'number' ? min : undefined}
      max=${typeof max === 'number' ? max : undefined}
      step=${typeof step === 'number' ? step : undefined}
      @input=${_onNumberChange}
      @change=${_onNumberChange}
    />`;
  }

  // Boolean
  if (dType === 'Boolean') {
    return html`<input
      type="checkbox"
      .checked=${value}
      style=${styleMap(style)}
      @change=${(ev: InputEvent) => {
        ev.stopPropagation();
        onChange((ev.target as HTMLInputElement).checked);
      }}
    />`;
  }

  // Color3
  if (dType === 'Color3') {
    const _onColor3Change = (ev: InputEvent) => {
      ev.stopPropagation();
      onChange(Schema.fromAttr('Color3', (ev.target as HTMLInputElement).value)?.toLinearSpace());
    };

    return html`<input
      type="color"
      .value=${(value as Color3).toGammaSpace().toHexString()}
      style=${styleMap(style)}
      @input=${_onColor3Change}
      @change=${_onColor3Change}
    />`;
  }

  // Color4
  if (dType === 'Color4') {
    const _c4 = value as Color4;
    const _onAlphaChange = (ev: InputEvent) => {
      ev.stopPropagation();
      const _a = Number((ev.target as HTMLInputElement).value);
      onChange(new Color4(_c4.r, _c4.g, _c4.b, _a));
    };

    return html`
      ${renderInput(
        { dType: 'Color3' } as any,
        new Color3(_c4.r, _c4.g, _c4.b),
        (_c3: Color3) => onChange(new Color4(_c3.r, _c3.g, _c3.b, _c4.a)),
        { flex: 1 }
      )}
      <input
        type="number"
        .value=${_c4.a}
        min="0"
        max="1"
        step="0.1"
        @input=${_onAlphaChange}
        @change=${_onAlphaChange}
        style="width: 60px; margin-left: 4px;"
      />
    `;
  }

  // Vector3
  if (dType === 'Vector3') {
    const _v = value as Vector3;

    return html`
      ${renderInput({ dType: 'Number' } as any, _v.x, (x: any) => onChange(new Vector3(x, _v.y, _v.z)))}
      ${renderInput({ dType: 'Number' } as any, _v.y, (y: any) => onChange(new Vector3(_v.x, y, _v.z)))}
      ${renderInput({ dType: 'Number' } as any, _v.z, (z: any) => onChange(new Vector3(_v.x, _v.y, z)))}
    `;
  }

  // URL
  if (dType === 'URI') {
    return html`
      <xr-gui-uri-input .preset=${uriPreset} .value=${value} @change=${(ev: CustomEvent) => onChange(ev.detail.value)}></xr-gui-uri-input>
    `;
  }

  return html`<div>${'<' + dType + '>'}</div>`;
}

@registerElement('xr-gui-uri-input')
export class XRGuiURIInput extends XRThinElement {
  static styles = css`
    :host {
      width: 100%;
    }
    select {
      width: 100%;
      box-sizing: border-box;
    }
    .query-body {
      margin-top: 8px;
      padding-left: 8px;
      border-left: 1px dashed #ddd;
    }
    .row {
      margin-bottom: 4px;
    }
    .row > .label {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .row > .input {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  `;

  @state()
  preset: NonNullable<NonNullable<PropertyDeclaration['extra']>['uriPreset']> | null = null;

  @state()
  value: IDataTypeMap['URI'] | null = null;

  @state()
  _presetName: string | null = null;

  protected createRenderRoot(): any {
    return (LitElement.prototype as any).createRenderRoot.call(this);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('preset')) {
      this._presetName = this.preset ? Object.keys(this.preset)[0] : null;
    }

    if (changed.has('value')) {
      this._presetName = this.value?.host || null;
    }
  }

  render() {
    if (!this.preset) {
      // 没有 preset，退化为 String
      return renderInput({ dType: 'String' } as any, this.value?.href, (href: string) => {
        this.emit('change', { value: URIUtil.parse(href) });
      });
    }

    const preset = this.preset;

    const _selector = html`
      <select
        @change=${(ev: InputEvent) => {
          ev.stopPropagation();
          const _name = (ev.target as HTMLSelectElement).value;
          const _data = preset[_name];
          const _newUri = URIUtil.parse(URIUtil.stringify({ protocol: _data.protocol, host: _data.host, pathname: _data.pathname }));
          this.emit('change', { value: _newUri });
        }}
      >
        ${Object.keys(preset).map(_name => {
          const _selected = _name === this._presetName ? true : undefined;
          return html`<option value=${_name} selected=${ifDefined(_selected)}>${_name}</option>`;
        })}
      </select>
    `;

    const _queryEditor = this._presetName
      ? html`
          <div class="query-body">
            ${repeat(
              Object.entries(preset[this._presetName].query),
              ([prop, def]) => prop,
              ([prop, def]) => {
                return html`
                  <div class="row">
                    <div class="label">${prop}</div>
                    <div class="input">
                      ${renderInput({ dType: def.dType, extra: def } as any, this.value?.query[prop], (newValue: any) => {
                        const _uri = this.value;
                        if (!_uri) return;

                        const _newUri = URIUtil.parse(URIUtil.stringify({ ..._uri, href: '', query: { ..._uri.query, [prop]: newValue } }));
                        this.emit('change', { value: _newUri });
                      })}
                    </div>
                  </div>
                `;
              }
            )}
          </div>
        `
      : null;

    return html`${_selector}${_queryEditor}`;
  }
}
