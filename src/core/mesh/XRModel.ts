import { Decorator } from '../Decorator';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import type { AssetContainer } from '@babylonjs/core/assetContainer';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { ElementUtil, Schema, randomID } from '../../util';
import { TagRefController, TransformLikeController } from '../controller';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { provide } from '@lit/context';
import { Context } from '../Context';
import { state } from 'lit/decorators.js';
import { AnimationGroup } from '@babylonjs/core/Animations/animationGroup';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { ITransformNodeLikeImpl } from '../impl';
import { IMaterialImpl } from '../impl';
import { TemplateResult, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { XRMaterial } from '../material';
import { XRTexture } from '../texture';
import { XRMesh } from './XRMesh';
import { XRNode } from './XRNode';

export class XRModel extends XRSceneScopeElement<TransformNode> implements ITransformNodeLikeImpl {
  @provide({ context: Context.AssetContainer })
  @state()
  private _container: AssetContainer | null = null;

  @Decorator.property('String', 'src', null)
  src: string | null = null;

  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Vector3', 'rotation', null)
  rotation: Vector3 | null = null;

  @Decorator.property('Quaternion', 'quaternion', null)
  quaternion: Quaternion | null = null;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale: Vector3 | null = null;

  @Decorator.property('Boolean', 'disable-pointer-event', null)
  disablePointerEvent: boolean | null = null;

  @Decorator.property('Number', 'layer', null)
  layer: number | null = null;

  @Decorator.property('String', 'extension', null)
  extension: string | null = null;

  @Decorator.property('String', 'material', null)
  material: string | null = null;

  @Decorator.property('String', 'auto-play', null)
  autoPlay: string | null = null;

  @Decorator.property('Boolean', 'loop', null)
  loop: boolean | null = null;

  @Decorator.property('Boolean', 'flat-shading', null)
  flatShading: boolean | null = null;

  /**
   * 原点转换。如果设置了该属性，则会把模型的原点转换到指定的位置。
   */
  @Decorator.property('Matrix', 'origin-transform', null)
  originTransform: Matrix | null = null;

  @Decorator.property('Boolean', 'preload', null)
  preload: boolean | null = null;

  @state()
  _material: (HTMLElement & IMaterialImpl) | null = null;

  @state()
  _internalStyleData: Record<string, Record<string, string | null>> = {};

  // FIXME: 这个是为了满足 ITransformNodeLikeImpl 的接口，并没有实际作用
  entityDelegated: boolean | null = null;

  get container() {
    return this._container;
  }

  constructor() {
    super();

    new TransformLikeController(this);
    new TagRefController(this, 'material', '_material', 'xr-material');
  }

  connected(): void {
    super.connected();

    const id = this.id || 'model:' + randomID();
    this.entity = new TransformNode(id, this.scene);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      this.entity.dispose();
      this.entity = null;
    }

    if (this._container) {
      this._container.dispose();
      this._container = null;
    }

    this._material = null;
    this._internalStyleData = {};
  }

  private async reloadModel() {
    if (this._container) {
      this._container.dispose();
      this._container = null;
    }

    if (!this.src || (this.disabled && !this.preload) || this.scene.isDisposed) return;

    this.scene.loadModel(this.src, this.extension || undefined).then(_container => {
      if (!this.entity) return;

      _container.addAllToScene();
      this._container = _container;

      _container.transformNodes.push(this.entity);

      // 把根节点的父节点设置为当前实体
      for (const node of _container.rootNodes) {
        node.parent = this.entity;
      }

      for (const mesh of _container.meshes) {
        if (mesh instanceof Mesh) {
          // 原点转换
          if (this.originTransform) mesh.bakeTransformIntoVertices(Matrix.Invert(this.originTransform));

          // 处理 flat-shading
          if (this.flatShading) mesh.convertToFlatShadedMesh();
        }
      }

      // 处理 auto-play
      if (this.autoPlay !== null) {
        let ags: AnimationGroup[] = [];

        if (this.autoPlay === '') {
          ags = _container.animationGroups;
        } else {
          const _names = Schema.fromAttr('Array', this.autoPlay) as string[];
          ags = _container.animationGroups.filter(a => _names.includes(a.name));
        }

        for (const ag of ags) {
          ag.play(!!this.loop);
        }
      }

      this.requestUpdate('_material');
      this.requestUpdate('disabled');
      this._buildInternalStyleData();

      // 立刻刷新
      this.performUpdate();

      this.scene.onReadyObservable.addOnce(() => {
        this.emit('load', { container: _container });
      });
    });
  }

  private _buildInternalStyleData() {
    if (!this._container) return;

    const _data: Record<string, Record<string, string | null>> = {};

    const _build = <_T extends { name: string }>(list: _T[], Ele: any) => {
      for (const item of list) {
        const _selector = `xr-model#${this.id} #${ElementUtil.normalizeID(item.name)}`;
        _data[_selector] = {};

        for (const [_p, _v] of Object.entries(Ele.getPropsFrom(item))) {
          if (_v === null || _p === 'entity') continue;

          const { dType, attribute } = Ele.getPropertyOptions(_p);
          const _css = Schema.toCssLiteral(dType, _v as any);
          if (!_css) continue;

          _data[_selector][`---${attribute || _p}`] = _css;
        }
      }
    };

    _build(this._container.materials, XRMaterial);
    _build(this._container.textures, XRTexture);
    _build(this._container.meshes, XRMesh);
    _build(
      this._container.transformNodes.filter(n => n !== this.entity),
      XRNode
    );

    this._internalStyleData = _data;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('src') || !this._container) this.reloadModel();

    if (changed.has('disabled') && this._container) {
      for (const item of [...this._container.meshes, ...this._container.transformNodes]) {
        item.setEnabled(!this.disabled);
      }
    }

    if (changed.has('_material') && this._container && this._material?.entity) {
      for (const m of this._container.meshes) {
        m.material = this._material.entity;
      }
    }
  }

  private _renderInternalStyle() {
    let textContent = '';

    for (const [selector, props] of Object.entries(this._internalStyleData)) {
      textContent += `${selector} {\n`;
      for (const [key, value] of Object.entries(props)) {
        if (value === null) continue;
        textContent += `  ${key}: ${value};\n`;
      }
      textContent += '}\n';
    }

    return html`
      <style>
        ${textContent}
      </style>
    `;
  }

  private _renderNode(node: TransformNode): TemplateResult<any> {
    const children = repeat<TransformNode>(
      node.getChildren(undefined, true),
      n => n.uniqueId,
      n => this._renderNode(n)
    );

    const id = ElementUtil.normalizeID(node.name);

    if (node instanceof Mesh) {
      return html` <xr-mesh entity-delegated id=${id} name=${node.name} .entity=${node}> ${children} </xr-mesh> `;
    }

    return html` <xr-node entity-delegated id=${id} name=${node.name} .entity=${node}> ${children} </xr-node> `;
  }

  private _renderMaterials() {
    if (!this._container) return null;

    return repeat(
      this._container.materials,
      m => m.name,
      m => {
        if (m instanceof PBRMaterial) {
          return html` <xr-material entity-delegated id=${ElementUtil.normalizeID(m.name)} name=${m.name} .entity=${m}> </xr-material> `;
        }
        return null;
      }
    );
  }

  private _renderTextures() {
    if (!this._container) return null;

    return repeat(
      this._container.textures,
      t => t.name,
      t => {
        if (t instanceof Texture) {
          return html` <xr-texture entity-delegated id=${ElementUtil.normalizeID(t.name)} name=${t.name} .entity=${t}> </xr-texture> `;
        }
        return null;
      }
    );
  }

  render() {
    if (!this.entity) return null;

    return html`
      ${this._renderInternalStyle()}
      ${repeat<TransformNode>(
        this.entity.getChildren(undefined, true),
        n => n.uniqueId,
        n => this._renderNode(n)
      )}
      ${this._renderMaterials()} ${this._renderTextures()}
    `;
  }
}
