import { html } from 'lit';
import { registerElement } from '../../../registry';
import { IDataType } from '../../../util';
import { Decorator } from '../../Decorator';
import { XRThinElement } from '../../XRElement';
import { property } from 'lit/decorators.js';

@registerElement('xr-field-ctrl')
export class XRFieldCtrl extends XRThinElement {
  @Decorator.property('String', 'data-type', null)
  dataType: IDataType | null = null;

  @property({ type: String } as any)
  value: any = null;

  private _handleChange = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();

    let newValue: any = null;

    if (this.dataType === 'String') newValue = (e.target as HTMLInputElement).value;
    else if (this.dataType === 'Number') newValue = Number((e.target as HTMLInputElement).value);
    else if (this.dataType === 'Boolean') newValue = (e.target as HTMLInputElement).checked;

    this.emit('change', { value: newValue });
  };

  render() {
    if (this.dataType === 'String') return html`<input type="text" .value=${this.value} @change=${this._handleChange} />`;
    if (this.dataType === 'Number') return html`<input type="number" .value=${this.value} @change=${this._handleChange} />`;
    if (this.dataType === 'Boolean') return html`<input type="checkbox" .checked=${this.value} @change=${this._handleChange} />`;

    return html`<div>${this.dataType}</div>`;
  }
}
