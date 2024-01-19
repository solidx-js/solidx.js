import { html } from 'lit';
import { ElementRegistry, registerElement } from '../../registry';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { state } from 'lit/decorators.js';
import type { XRElement } from '../XRElement';
import { PointerEventTypes, PointerInfo } from '@babylonjs/core/Events/pointerEvents';
import type { XRMesh } from '../mesh/XRMesh';
import { Observer } from '@babylonjs/core/Misc/observable';
import { ElementUtil, Schema } from '../../util';

@registerElement('xr-editor')
export class XREditor extends XRSceneScopeElement<null> {
  private _pointerObserver: Observer<PointerInfo> | null = null;

  @state()
  private _activeElement: XRElement | null = null;

  // id -> prop -> value
  @state()
  private _draft: Record<string, Record<string, any>> = {};

  connected(): void {
    super.connected();

    this.style.position = 'absolute';
    this.style.top = '0';
    this.style.left = '0';
    this.style.width = '100%';
    this.style.height = '100%';
    this.style.pointerEvents = 'none';
    this.style.zIndex = '9999';

    this._pointerObserver = this.scene.onPointerObservable.add(ev => {
      if (ev.type === PointerEventTypes.POINTERTAP) {
        const pk = this.scene.pick(this.scene.pointerX, this.scene.pointerY);

        if (pk && pk.pickedMesh) {
          const _ele = this.scene.bindingElement.querySelector<XRMesh>(`xr-mesh[entity-id="${pk.pickedMesh.ID}"]`);
          this._activeElement = _ele;
        } else {
          this._activeElement = null;
        }
      }
    });

    import('./XREditorGUI').then(() => {
      this.logger.info('XREditorImpl loaded');
      ElementRegistry.Instance.apply(true);
    });
  }

  disconnected(): void {
    super.disconnected();

    if (this._pointerObserver) {
      this._pointerObserver.remove();
      this._pointerObserver = null;
    }
  }

  private _handleChange = (e: CustomEvent) => {
    const ele = e.detail.ele as XRElement;
    const prop = e.detail.prop as string;
    const value = e.detail.value;

    const newDraft = {
      ...this._draft,
      [ele.id]: {
        ...this._draft[ele.id],
        [prop]: value,
      },
    };

    this._draft = newDraft;
  };

  renderOverwriteStyle() {
    if (!this._activeElement) return null;

    const list: { selector: string; style: { [key: string]: string } }[] = [];
    const tagName = this._activeElement.tagName.toLowerCase();
    const id = this._activeElement.id;

    if (tagName === 'xr-mesh') {
      list.push({ selector: `xr-mesh#${id}`, style: { '---enable-outline': 'true' } });
    }

    // 把 draft 的样式也加进去
    for (const [id, props] of Object.entries(this._draft)) {
      const ele = this.scene.bindingElement.querySelector<XRElement>(`#${id}`);
      if (!ele) continue;

      const _style: { [key: string]: string } = {};

      for (const [prop, value] of Object.entries(props)) {
        const _def = ele._Cls.getPropertyOptions(prop);
        if (!_def || _def.state) continue;

        const cssText = Schema.toCssLiteral(_def.dType, value);
        _style[`---${_def.attribute || prop}`] = cssText;
      }

      list.push({ selector: `${ele.tagName.toLowerCase()}#${id}`, style: _style });
    }

    return html`<style>
      ${ElementUtil.getCssText(list)}
    </style>`;
  }

  render() {
    return html`${this.renderOverwriteStyle()}
      <xr-editor-gui
        .activeElement=${this._activeElement}
        @change=${this._handleChange}
        style="display: block; position: absolute; top: 0;left: 0; pointer-events: none; width: 100%; height: 100%;"
      >
      </xr-editor-gui>`;
  }
}
