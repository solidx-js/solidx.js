import { state } from 'lit/decorators.js';
import { Decorator, TagRefController, XRNode, XRMesh } from '../core';
import { PrimitiveBase } from './PrimitiveBase';
import { html } from 'lit';
import { registerElement } from '../registry';

@registerElement('xr-screen-projector')
export class XRScreenProjector extends PrimitiveBase {
  @Decorator.property('String', 'target', null)
  target: string | null = null;

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
