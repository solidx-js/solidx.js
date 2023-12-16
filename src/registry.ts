import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import {
  XRKeyFrames,
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
  XRStyle,
} from './core';
import { customElement } from 'lit/decorators.js';
import { CTMFileLoader } from './loader';
import { XRArrow, XREnv, XRGround } from './primitive';
import { IEntityType } from './type';

export class ElementRegistry {
  static Instance = new ElementRegistry();

  private _elements: Record<string, typeof XRElement> = {};

  register(name: string, Ele: typeof XRElement) {
    this._elements[name] = Ele;

    if (!customElements.get(name)) {
      customElement(name)(Ele as any);
    }
  }

  get(name: string) {
    return this._elements[name];
  }

  keys() {
    return Object.keys(this._elements);
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
ElementRegistry.Instance.register('xr-keyframes', XRKeyFrames as any);
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
ElementRegistry.Instance.register('xr-style', XRStyle as any);

// primitives
ElementRegistry.Instance.register('xr-env', XREnv as any);
ElementRegistry.Instance.register('xr-ground', XRGround as any);
ElementRegistry.Instance.register('xr-arrow', XRArrow as any);

export const EntityTagNameMap: Partial<Record<IEntityType, string>> = {
  mesh: 'xr-mesh',
  material: 'xr-material',
  'background-material': 'xr-background-material',
  'grid-material': 'xr-grid-material',
  geometry: 'xr-geometry',
  transformNode: 'xr-node',
  texture: 'xr-texture',
  'cube-texture': 'xr-cube-texture',
};
