import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';

const BuiltinEventList: Set<string> = new Set([
  'abort',
  'animationcancel',
  'animationend',
  'animationiteration',
  'animationstart',
  'auxclick',
  'beforeinput',
  'blur',
  'cancel',
  'canplay',
  'canplaythrough',
  'change',
  'click',
  'close',
  'compositionend',
  'compositionstart',
  'compositionupdate',
  'contextmenu',
  'copy',
  'cuechange',
  'cut',
  'dblclick',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'durationchange',
  'emptied',
  'ended',
  'error',
  'focus',
  'focusin',
  'focusout',
  'formdata',
  'gotpointercapture',
  'input',
  'invalid',
  'keydown',
  'keypress',
  'keyup',
  'load',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'lostpointercapture',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'paste',
  'pause',
  'play',
  'playing',
  'pointercancel',
  'pointerdown',
  'pointerenter',
  'pointerleave',
  'pointermove',
  'pointerout',
  'pointerover',
  'pointerup',
  'progress',
  'ratechange',
  'reset',
  'resize',
  'scroll',
  'scrollend',
  'securitypolicyviolation',
  'seeked',
  'seeking',
  'select',
  'selectionchange',
  'selectstart',
  'slotchange',
  'stalled',
  'submit',
  'suspend',
  'timeupdate',
  'toggle',
  'touchcancel',
  'touchend',
  'touchmove',
  'touchstart',
  'transitioncancel',
  'transitionend',
  'transitionrun',
  'transitionstart',
  'volumechange',
  'waiting',
  'webkitanimationend',
  'webkitanimationiteration',
  'webkitanimationstart',
  'webkittransitionend',
  'wheel',
  'fullscreenchange',
  'fullscreenerror',
]);

export class EventDispatchController implements ReactiveController {
  static BuiltinEventList = BuiltinEventList;

  private _mob: MutationObserver | null = null;
  private _bindEvents = new Map<string, Function>();

  constructor(private host: XRElement) {
    this.host.addController(this);
  }

  hostConnected() {
    this._mob = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        const { type, attributeName } = mutation;
        if (type === 'attributes' && attributeName && attributeName.startsWith('on')) {
          this._handleAttributeChange(attributeName);
        }
      });
    });

    this._mob.observe(this.host, { attributes: true, attributeFilter: ['on*'] });

    // 初始化绑定
    const attrs = this.host.getAttributeNames();
    attrs.forEach(attr => {
      if (attr.startsWith('on')) {
        this._handleAttributeChange(attr);
      }
    });
  }

  private _handleAttributeChange(attr: string) {
    if (!attr.startsWith('on')) return;

    const evType = attr.slice(2);
    if (BuiltinEventList.has(evType)) return; // 内置事件不处理, 浏览器会自己处理

    const fnBody = this.host.getAttribute(attr);
    const hasBind = this._bindEvents.has(evType);

    // 新增绑定
    if (!hasBind && fnBody) {
      const fn = _createHandler(this.host, fnBody);
      this.host.addEventListener(evType as any, fn as any);

      this._bindEvents.set(evType, fn);

      this.host.logger.debug(`[EventDispatchController] addEventListener: ${evType}`);
    }

    // 移除绑定
    if (hasBind && !fnBody) {
      const fn = this._bindEvents.get(evType);
      this.host.removeEventListener(evType as any, fn as any);
      this._bindEvents.delete(evType);

      this.host.logger.debug(`[EventDispatchController] removeEventListener: ${evType}`);
    }

    // 更新绑定
    if (hasBind && fnBody) {
      this.host.removeEventListener(evType as any, this._bindEvents.get(evType) as any);

      const newFn = _createHandler(this.host, fnBody);
      this.host.addEventListener(evType as any, newFn as any);

      this._bindEvents.set(evType, newFn);
    }
  }

  hostDisconnected() {
    if (this._mob) {
      this._mob.disconnect();
      this._mob = null;
    }

    this._bindEvents.forEach((fn, evType) => {
      this.host.removeEventListener(evType as any, fn as any);
    });
    this._bindEvents.clear();
  }
}

function _createHandler(host: HTMLElement, fnBody: string) {
  return new Function('event', fnBody).bind(host);
}
