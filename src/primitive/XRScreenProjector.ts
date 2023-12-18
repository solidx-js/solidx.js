import { state } from 'lit/decorators.js';
import { Decorator, TagRefController, XRNode, XRMesh } from '../core';
import { PrimitiveBase } from './PrimitiveBase';
import { html } from 'lit';

export class XRScreenProjector extends PrimitiveBase {
  @Decorator.property('String', 'target', null)
  target: string | null = null;

  @state()
  _target: XRMesh | XRNode | null = null;

  constructor() {
    super();

    TagRefController.create<XRMesh | XRNode>()(this, 'target', '_target');
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
