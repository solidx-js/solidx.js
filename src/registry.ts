import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import {
  XRElement,
  XRGeometry,
  XRMaterial,
  XRMesh,
  XRScene,
  XRNode,
  XRCamera,
  XRDirectionalLight,
  XRHemisphericLight,
  XRModel,
  XRRay,
  XRDecal,
  XRPointLight,
  XRTexture,
  XRCubeTexture,
  XRBackgroundMaterial,
  XRGridMaterial,
  XRLine,
  XRDragger,
  XRPipelineSSAO2,
  XRVolumetricLight,
} from './core';
import { customElement } from 'lit/decorators.js';
import { CTMFileLoader } from './loader';
import { XRArrow, XREllipse, XREnv, XRGround, XRScreenProjector, XRWorldAxis } from './primitive';
import { DefaultBizLogger } from './BizLogger';
import { Schema } from './util';
// import { XROrtho } from './tooth';

export class ElementRegistry {
  static Instance = new ElementRegistry();

  private _elements: Record<string, typeof XRElement> = {};

  register(name: string, Ele: typeof XRElement) {
    if (this._elements[name]) throw new Error(`Element "${name}" already registered`);
    this._elements[name] = Ele;
  }

  get(name: string) {
    return this._elements[name];
  }

  keys() {
    return Object.keys(this._elements);
  }

  doRegisterToGlobal() {
    const styleData: Record<string, string[]> = {};

    const _cssProps = new Map<
      string,
      {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types
        syntax?: string;
        initialValue?: string;
      }
    >();

    for (const name of this.keys()) {
      DefaultBizLogger.info('register element: %s', name);

      const Ele = this.get(name)!;

      // 注册到 customElements
      customElement(name)(Ele as any);

      const _styleContents: string[] = [];

      // 记录 CSS 自定义属性
      for (const [key, def] of Ele.elementProperties) {
        if (typeof key !== 'string' || def.state) continue;
        const propName = typeof def.attribute === 'string' ? def.attribute : key;

        let syntax: string | undefined;
        let initialValue: string | undefined;

        if (def.dType === 'Color3' || def.dType === 'Color4') {
          syntax = '<color>';
          initialValue = '#ffffff';
        }
        //
        else if (def.dType === 'Number' || def.dType === 'Vector2' || def.dType === 'Vector3' || def.dType === 'Vector4') {
          syntax = '<number>+';
          initialValue = '0';
        }

        _cssProps.set(propName, {});

        if (def.initValue) {
          _styleContents.push(`---${propName}: ${Schema.toCssLiteral(def.dType, def.initValue)}`);
        }
      }

      styleData[name] = _styleContents;
    }

    console.log('@@@', 'styleData ->', styleData);

    const styEle = document.createElement('style');
    styEle.dataset.for = 'xr';
    styEle.textContent = Object.entries(styleData).reduce((prev, [name, contents]) => {
      return prev + `${name} {\n${contents.join(';\n')}\n}\n`;
    }, '');
    document.head.appendChild(styEle);

    // 注册到 CSS 自定义属性
    // 用 --- 开头，禁用继承
    for (const [_n, _def] of _cssProps) {
      const _prop = `---${_n}`;
      DefaultBizLogger.info('register css property: %s, syntax=%s, initial=%s', _prop, _def.syntax || '*', _def.initialValue || '');
      CSS.registerProperty({ name: _prop, ..._def, inherits: false });
    }
  }
}

// loaders
SceneLoader.RegisterPlugin(new CTMFileLoader());

// core
ElementRegistry.Instance.register('xr-scene', XRScene as any);
ElementRegistry.Instance.register('xr-geometry', XRGeometry as any);
ElementRegistry.Instance.register('xr-material', XRMaterial as any);
ElementRegistry.Instance.register('xr-mesh', XRMesh as any);
ElementRegistry.Instance.register('xr-node', XRNode as any);
ElementRegistry.Instance.register('xr-camera', XRCamera as any);
ElementRegistry.Instance.register('xr-directional-light', XRDirectionalLight as any);
ElementRegistry.Instance.register('xr-hemispheric-light', XRHemisphericLight as any);
ElementRegistry.Instance.register('xr-point-light', XRPointLight as any);
ElementRegistry.Instance.register('xr-model', XRModel as any);
ElementRegistry.Instance.register('xr-ray', XRRay as any);
ElementRegistry.Instance.register('xr-decal', XRDecal as any);
ElementRegistry.Instance.register('xr-texture', XRTexture as any);
ElementRegistry.Instance.register('xr-cube-texture', XRCubeTexture as any);
ElementRegistry.Instance.register('xr-background-material', XRBackgroundMaterial as any);
ElementRegistry.Instance.register('xr-grid-material', XRGridMaterial as any);
ElementRegistry.Instance.register('xr-line', XRLine as any);
ElementRegistry.Instance.register('xr-dragger', XRDragger as any);
ElementRegistry.Instance.register('xr-pipeline-ssao2', XRPipelineSSAO2 as any);
ElementRegistry.Instance.register('xr-volumetric-light', XRVolumetricLight as any);

// primitives
ElementRegistry.Instance.register('xr-env', XREnv as any);
ElementRegistry.Instance.register('xr-ground', XRGround as any);
ElementRegistry.Instance.register('xr-arrow', XRArrow as any);
ElementRegistry.Instance.register('xr-world-axis', XRWorldAxis as any);
ElementRegistry.Instance.register('xr-scene-projector', XRScreenProjector as any);
ElementRegistry.Instance.register('xr-ellipse', XREllipse as any);

// biz test
// ElementRegistry.Instance.register('xr-ortho', XROrtho as any);

ElementRegistry.Instance.doRegisterToGlobal();
