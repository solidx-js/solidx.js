import { ReactiveController } from 'lit';
import type { XRElement } from '../XRElement';

export class StyleSelectorController implements ReactiveController {
  private _styleEleMob: MutationObserver | null = null;

  constructor(private host: XRElement<any>) {
    this.host.addController(this);
  }

  hostConnected(): void {
    // 监听样式表变化
    this._styleEleMob = new MutationObserver(records => {
      const selectors = new Set<string>();

      for (const { addedNodes, removedNodes, type, target, oldValue } of records) {
        if (type === 'childList') {
          const _addedList = Array.from(addedNodes);
          const _removedList = Array.from(removedNodes);

          // 收集所有受影响的样式表
          const _effectStyleEleList = [..._addedList, ..._removedList].filter(n => n instanceof HTMLElement && n.tagName === 'STYLE');
          for (const _style of _effectStyleEleList) {
            const _content = _style.textContent;
            if (!_content) continue;

            // 提取所有选择器
            const _subSelectors = Object.keys(parseStyleTextContent(_content));
            _subSelectors.forEach(s => selectors.add(s));
          }
        }

        if (type === 'characterData') {
          const _content = target.textContent;
          if (!_content) continue;

          // 提取所有选择器
          const _subSelectors = Object.keys(parseStyleTextContent(_content));
          _subSelectors.forEach(s => selectors.add(s));

          if (oldValue) {
            Object.keys(parseStyleTextContent(oldValue)).forEach(s => selectors.add(s));
          }
        }
      }

      if (selectors.size) {
        // const eleList = this.host.querySelectorAll([...selectors].join(', '));

        // eleList.forEach(_ele => {
        //   (_ele as XRElement).reloadAttrFromComputedStyles?.();
        // });
      }
    });
    this._styleEleMob.observe(document, { childList: true, subtree: true, characterData: true, characterDataOldValue: true });
  }

  hostDisconnected(): void {
    if (this._styleEleMob) {
      this._styleEleMob.disconnect();
      this._styleEleMob = null;
    }
  }
}

// 解析样式表
function parseStyleTextContent(text: string) {
  const ret: Record<string, Record<string, string>> = {};

  // 提取所有选择器
  const selectors = text.match(/(?<=^|})([^{]+){/g);
  if (!selectors) return ret;

  // 提取所有属性
  const attrs = text.match(/(?<=^|;)([^:]+):/g);
  if (!attrs) return ret;

  // 提取所有值
  const values = text.match(/(?<=:)([^;]+);/g);
  if (!values) return ret;

  // 组装
  for (let i = 0; i < selectors.length; i++) {
    const selector = selectors[i].trim();
    const attr = attrs[i].trim();
    const value = values[i].trim();

    if (!ret[selector]) ret[selector] = {};
    ret[selector][attr] = value;
  }

  return ret;
}
