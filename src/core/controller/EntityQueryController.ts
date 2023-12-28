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

  queryList<T extends HTMLElement>(selector: string): T[] {
    return Array.from(this.host.querySelectorAll(selector));
  }

  queryWatch<T extends HTMLElement>(selector: string, signal: AbortSignal, callback: (entity: T) => void, issuer: string) {
    if (signal.aborted) return;

    let entity = this.query<T>(selector);
    if (entity) {
      this.host.logger.debug('resolved: %s -> %s', selector, issuer);
      callback(entity);
    }

    // 用观察者模式监听子元素变化
    const observer = new MutationObserver(() => {
      const newEntity = this.query<T>(selector);
      if (!newEntity || newEntity === entity) return; // 如果新旧元素相同，不触发回调

      this.host.logger.debug('resolved: %s -> %s', selector, issuer);
      callback(newEntity);

      entity = newEntity; // 更新旧元素
    });

    const _onAbort = () => {
      observer.disconnect();
      signal.removeEventListener('abort', _onAbort);
    };
    signal.addEventListener('abort', _onAbort);

    observer.observe(this.host, { childList: true, subtree: true });
  }

  queryWatchList<T extends HTMLElement>(selector: string, signal: AbortSignal, callback: (entities: T[]) => void, issuer: string) {
    if (signal.aborted) return;

    let entities = this.queryList<T>(selector);

    this.host.logger.debug('resolved: %s x%s -> %s', selector, entities.length, issuer);
    callback(entities);

    // 用观察者模式监听子元素变化
    const observer = new MutationObserver(() => {
      const newEntities = this.queryList<T>(selector);

      // 用 Set 求并集，如果并集长度等于原始长度，说明没有新的元素加入，也没有元素被移除，不触发回调
      const _collection = new Set(newEntities.concat(entities));
      if (_collection.size === entities.length && _collection.size === newEntities.length) return;

      this.host.logger.debug('resolved: %s x%s -> %s', selector, newEntities.length, issuer);
      callback(newEntities);

      entities = newEntities; // 更新旧元素
    });

    const _onAbort = () => {
      observer.disconnect();
      signal.removeEventListener('abort', _onAbort);
    };
    signal.addEventListener('abort', _onAbort);

    observer.observe(this.host, { childList: true, subtree: true });
  }
}
