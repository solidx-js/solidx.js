import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';

export class EventDispatchController implements ReactiveController {
  private _disposes: (() => void)[] = [];

  constructor(private host: XRElement) {
    this.host.addController(this);
  }

  hostConnected() {
    for (const evType of this.host._Cls.events) {
      const _handler = (ev: Event) => {
        const attr = this.host.getAttribute(`forward-${ev.type}`);
        if (!attr) return;

        if (attr === '__debug__') return console.log('forward event:', ev);

        const root = this.host.closest('xr-scene');
        if (!root) return;

        // eg: forward-click="#for: position=this.position, rotation=this.rotation; #bar: position=this.position;"
        const exprs = parseAttr(attr);

        for (const [selector, fn] of Object.entries(exprs)) {
          this.host.logger.debug('forward event: %s -> %s', ev.type, selector);
          root.querySelectorAll(selector).forEach(el => fn(el, ev));
        }
      };

      this.host.addEventListener(evType, _handler);
      this._disposes.push(() => this.host.removeEventListener(evType, _handler));

      this.host.logger.debug('bind event: %s', evType);
    }
  }

  hostDisconnected() {
    for (const dispose of this._disposes) dispose();
    this._disposes = [];
  }
}

const _FunctionCache = new Map<string, Function>();

function parseAttr(attr: string) {
  const ret: { [selector: string]: Function } = {};

  for (const part of attr.split(';')) {
    const [selector, exprs] = part.split(':').map(s => s.trim());

    const exprLines: string[] = exprs.split(/,\s+/g).map(s => `$element.${s};`);
    const fnBody = exprLines.join('\n');

    let fn = _FunctionCache.get(fnBody);

    if (!fn) {
      fn = new Function('$element', 'event', fnBody);
      _FunctionCache.set(selector, fn);
    }

    ret[selector] = fn;
  }

  return ret;
}
