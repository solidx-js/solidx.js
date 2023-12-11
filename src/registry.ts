import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import {
  XRKeyFrames,
  XRElement,
  XREngine,
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
} from './core';
import { customElement } from 'lit/decorators.js';
import { CTMFileLoader } from './loader';

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

ElementRegistry.Instance.register('xr-engine', XREngine as any);
ElementRegistry.Instance.register('xr-scene', XRScene as any);
ElementRegistry.Instance.register('xr-geometry', XRGeometry as any);
ElementRegistry.Instance.register('xr-material', XRMaterial as any);
ElementRegistry.Instance.register('xr-mesh', XRMesh as any);
ElementRegistry.Instance.register('xr-node', XRNode as any);
ElementRegistry.Instance.register('xr-keyframes', XRKeyFrames as any);
ElementRegistry.Instance.register('xr-camera', XRCamera as any);
ElementRegistry.Instance.register('xr-directional-light', XRDirectionalLight as any);
ElementRegistry.Instance.register('xr-hemispheric-light', XRHemisphericLight as any);
ElementRegistry.Instance.register('xr-model', XRModel as any);
ElementRegistry.Instance.register('xr-ray', XRRay as any);
ElementRegistry.Instance.register('xr-decal', XRDecal as any);
