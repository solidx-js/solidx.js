import { Component, GeometryComponent, MaterialComponent } from './components';
import { XRElement, XREngine, XRGeometry, XRMaterial, XRMesh, XRScene } from './core';
import { Primitive, CameraPrimitive, SkyPrimitive } from './primitives';
import { XRTransformNode } from './core/XRTransformNode';

export class ElementRegistry {
  static Instance = new ElementRegistry();

  private _elements: Record<string, typeof XRElement> = {};

  register(name: string, element: typeof XRElement) {
    this._elements[name] = element;
    customElements.define(name, element);
  }

  get(name: string) {
    return this._elements[name];
  }

  keys() {
    return Object.keys(this._elements);
  }
}

/**
 * A registry for storing and retrieving Primitive by name.
 */
export class PrimitiveRegistry {
  static Instance = new PrimitiveRegistry();

  private _primitives: Record<string, typeof Primitive> = {};

  register(name: string, primitive: typeof Primitive) {
    this._primitives[name] = primitive;
    customElements.define(name, primitive);
  }

  get(name: string) {
    return this._primitives[name];
  }
}

/**
 * Represents a registry for components in the application.
 */
export class ComponentRegistry {
  static Instance = new ComponentRegistry();

  private _components: Record<string, typeof Component> = {};

  register(name: string, component: typeof Component) {
    this._components[name] = component;
  }

  get(name: string) {
    return this._components[name];
  }

  has(name: string) {
    return !!this._components[name];
  }
}

// 1. 注册组件(必须先注册，否则下面 define 时会找不到注册组件导致报错)
// ComponentRegistry.Instance.register('camera', CameraComponent);
ComponentRegistry.Instance.register('geometry', GeometryComponent as any);
ComponentRegistry.Instance.register('material', MaterialComponent as any);
// ComponentRegistry.Instance.register('position', PositionComponent as any);
// ComponentRegistry.Instance.register('rotation', RotationComponent as any);
// ComponentRegistry.Instance.register('model', ModelComponent as any);

// 2. 注册原生元素
ElementRegistry.Instance.register('xr-engine', XREngine);
ElementRegistry.Instance.register('xr-scene', XRScene);
ElementRegistry.Instance.register('xr-geometry', XRGeometry);
ElementRegistry.Instance.register('xr-material', XRMaterial);
ElementRegistry.Instance.register('xr-mesh', XRMesh);
ElementRegistry.Instance.register('xr-transform-node', XRTransformNode);

// 3. 注册 Primitive
// PrimitiveRegistry.Instance.register('xr-camera', CameraPrimitive);
// PrimitiveRegistry.Instance.register('xr-sky', SkyPrimitive);

// 注册到 customElements
// ===========================
ElementRegistry.Instance.keys().forEach(tag => {
  customElements.whenDefined(tag).then(() => {
    if (customElements.get(tag)) return;
    customElements.define(tag, ElementRegistry.Instance.get(tag));
  });
});
