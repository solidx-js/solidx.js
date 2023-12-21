import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { XRStyle } from '../misc/XRStyle';

type IStyleItem = { weight: number; domOrder: number; selector: string; attributes: Record<string, string> };

export class StyleSelectorController implements ReactiveController {
  private _styles: IStyleItem[] = [];
  private _mob: MutationObserver | null = null;

  constructor(private host: XRElement<any>) {
    this.host.addController(this);
  }

  hostConnected(): void {
    // 监听后代变化
    this._mob = new MutationObserver(records => {
      let _needDoCollect = false;
      const _needDoApply = new Set<HTMLElement>();

      // 遍历所有变化
      for (const { addedNodes, removedNodes, type, attributeName, target } of records) {
        // 1. childList
        if (type === 'childList') {
          const _addedList = Array.from(addedNodes);
          const _removedList = Array.from(removedNodes);

          // 如果是样式表变化，需要重新收集
          _needDoCollect = [..._addedList, ..._removedList].some(n => n instanceof XRStyle);

          // 在新增元素上应用样式
          _addedList.filter(n => n instanceof HTMLElement).forEach(n => _needDoApply.add(n as HTMLElement));
        }

        // 2. attributes
        if (type === 'attributes') {
          // 如果是样式表变化，需要重新收集
          if (target instanceof XRStyle) _needDoCollect = true;

          // 如果是元素 class 变化，需要重新应用
          if (target instanceof XRElement && (attributeName === 'class' || attributeName === 'mouse-over')) _needDoApply.add(target);
        }
      }

      if (_needDoCollect) this._doCollect();
      if (_needDoApply.size) this._doApply();
    });

    this._mob.observe(this.host, { childList: true, subtree: true, attributes: true });

    this._doCollect();
    this._doApply();
  }

  hostDisconnected(): void {
    if (this._mob) {
      this._mob.disconnect();
      this._mob = null;
    }
  }

  // 收集样式表
  _doCollect() {
    const styles: IStyleItem[] = [];

    let domOrder = 0;

    for (const styleEle of Array.from(this.host.querySelectorAll('xr-style'))) {
      const selector = styleEle.getAttribute('selector');
      if (!selector) continue;

      const attributes: Record<string, string> = {};

      for (const attr of Array.from(styleEle.attributes)) {
        if (attr.name === 'selector') continue; // selector 本身不需要
        attributes[attr.name] = attr.value;
      }

      const weight = calcSelectorWeight(selector);
      styles.push({ domOrder, weight, attributes, selector });

      domOrder++;
    }

    this._styles = styles;
  }

  // 应用样式
  _doApply() {
    // 1. 按元素分组
    const groups = new Map<HTMLElement, IStyleItem[]>();

    for (const sty of this._styles) {
      const targets = this.host.querySelectorAll<HTMLElement>(sty.selector);

      for (const t of Array.from(targets)) {
        if (!groups.has(t)) groups.set(t, []);
        groups.get(t)!.push(sty);
      }
    }

    // 2. 组内按权重排序
    for (const list of groups.values()) {
      list.sort((a, b) => b.weight - a.weight || b.domOrder - a.domOrder); // 从大到小
    }

    // 3. 应用样式
    for (const [target, list] of groups) {
      if (list.length === 0 || !(target instanceof XRElement)) continue;

      // this.host.logger.debug(
      //   'apply style -> %s <- %s',
      //   target.tagName.toLowerCase() + ':#' + target.id || '',
      //   list.map(d => d.selector).join(' ')
      // );

      const data = list.reduceRight((prev, curr) => ({ ...prev, ...curr.attributes }), {});
      target._setClassRefData(data);
    }

    // 4. 剩下的是没有匹配的元素，需要清空样式
    const toCleanList = Array.from(this.host.querySelectorAll<XRElement>('*')).filter(
      el => el instanceof XRElement && !(el instanceof XRStyle) && !groups.has(el)
    );
    for (const ele of toCleanList) ele._setClassRefData({});
  }
}

function calcSelectorWeight(selector: string) {
  if (selector.includes(',')) return 0; // 不支持逗号分隔的选择器

  const parts = selector
    .split(' ')
    .map(p => p.trim())
    .filter(Boolean);

  let weight = 0;

  for (const part of parts) {
    if (part.startsWith('#')) weight += 100;
    else if (part.startsWith('.')) weight += 10;
    else weight += 1;
  }

  return weight;
}
