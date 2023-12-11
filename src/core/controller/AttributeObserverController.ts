import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';

export class AttributeObserverController implements ReactiveController {
  private _mob: MutationObserver | null = null;

  constructor(private host: XRElement) {
    this.host.addController(this);
  }

  hostConnected() {
    this._mob = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        const { type, attributeName, oldValue } = mutation;
        if (type === 'attributes' && attributeName) {
          this.host.requestUpdate(attributeName, oldValue);
        }
      });
    });

    this._mob.observe(this.host, { attributes: true, attributeOldValue: true });

    // 初始化
    for (const attr of Array.from(this.host.attributes)) {
      this.host.requestUpdate(attr.name);
    }
  }

  hostDisconnected() {
    if (this._mob) {
      this._mob.disconnect();
      this._mob = null;
    }
  }
}
