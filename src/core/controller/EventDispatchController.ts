import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { BuiltinEventList } from '../Const';

export class EventDispatchController implements ReactiveController {
  private _mob: MutationObserver | null = null;
  private _onBindEvents = new Map<string, Function>();

  constructor(private host: XRElement) {
    this.host.addController(this);
  }

  hostConnected() {
    this._mob = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        const { type, attributeName } = mutation;
        if (type === 'attributes' && attributeName) {
          if (attributeName.startsWith('on')) this._handleOnAttrChange(attributeName);
        }
      });
    });

    this._mob.observe(this.host, { attributes: true, attributeFilter: ['on*'] });

    // 初始化绑定
    const attrs = this.host.getAttributeNames();
    attrs.forEach(attr => {
      if (attr.startsWith('on')) {
        this._handleOnAttrChange(attr);
      }
    });
  }

  private _handleOnAttrChange(attr: string) {
    if (!attr.startsWith('on')) return;

    const evType = attr.slice(2);
    if (BuiltinEventList.has(evType)) return; // 内置事件不处理, 浏览器会自己处理

    const fnBody = this.host.getAttribute(attr);
    const hasBind = this._onBindEvents.has(evType);

    // 新增绑定
    if (!hasBind && fnBody) {
      const fn = _createHandler(this.host, fnBody);
      this.host.addEventListener(evType as any, fn as any);

      this._onBindEvents.set(evType, fn);

      this.host.logger.debug(`[EventDispatchController] addEventListener: ${evType}`);
    }

    // 移除绑定
    if (hasBind && !fnBody) {
      const fn = this._onBindEvents.get(evType);
      this.host.removeEventListener(evType as any, fn as any);
      this._onBindEvents.delete(evType);

      this.host.logger.debug(`[EventDispatchController] removeEventListener: ${evType}`);
    }

    // 更新绑定
    if (hasBind && fnBody) {
      this.host.removeEventListener(evType as any, this._onBindEvents.get(evType) as any);

      const newFn = _createHandler(this.host, fnBody);
      this.host.addEventListener(evType as any, newFn as any);

      this._onBindEvents.set(evType, newFn);
    }
  }

  hostDisconnected() {
    if (this._mob) {
      this._mob.disconnect();
      this._mob = null;
    }

    this._onBindEvents.forEach((fn, evType) => {
      this.host.removeEventListener(evType as any, fn as any);
    });
    this._onBindEvents.clear();
  }
}

function _createHandler(host: HTMLElement, fnBody: string) {
  return new Function('event', fnBody).bind(host);
}
