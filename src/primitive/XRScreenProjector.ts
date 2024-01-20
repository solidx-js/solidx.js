import { state } from 'lit/decorators.js';
import { Decorator, TagRefController, XRNode, XRMesh } from '../core';
import { PrimitiveBase } from './PrimitiveBase';
import { html } from 'lit';
import { registerElement } from '../registry';
import { IDataTypeMap } from '../util';

@registerElement('xr-screen-projector')
export class XRScreenProjector extends PrimitiveBase {
  @Decorator.property('URI', 'target', null)
  target: IDataTypeMap['URI'] | null = null;

  @state()
  _target: XRMesh | XRNode | null = null;

  constructor() {
    super();

    new TagRefController(this, 'target', '_target', null);
  }

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    return html`<div>aaa</div>`;
  }
}
