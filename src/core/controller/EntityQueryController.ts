import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';

export class EntityQueryController implements ReactiveController {
  constructor(private host: XRElement) {
    this.host.addController(this);
  }

  hostConnected() {}

  query<T extends HTMLElement>(selector: string): T | null {
    return this.host.querySelector(selector);
  }

  queryWatch<T extends HTMLElement>(
    selector: string,
    signal: AbortSignal,
    callback: (entity: T) => void,
    issuer: string // 用于调试
  ) {
    if (signal.aborted) return;

    const entity = this.query<T>(selector);
    if (entity) {
      callback(entity);
      this.host.logger.debug('resolved: %s -> %s', selector, issuer);
      return;
    }

    // 用观察者模式监听子元素变化
    const observer = new MutationObserver(() => {
      const entity = this.query<T>(selector);

      if (entity) {
        callback(entity);
        this.host.logger.debug('resolved: %s -> %s', selector, issuer);

        _onAbort(); // 监听到变化后立即取消监听
      }
    });

    const _onAbort = () => {
      observer.disconnect();
      signal.removeEventListener('abort', _onAbort);
    };
    signal.addEventListener('abort', _onAbort);

    observer.observe(this.host, { childList: true, subtree: true });
  }
}
