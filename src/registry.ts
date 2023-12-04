import {
  AnimationComponent,
  Component,
  GeometryComponent,
  MaterialComponent,
  MeshComponent,
  PositionComponent,
  RotationComponent,
} from './components';
import { XRAnimation, XRKeyFrame, XRElement, XREngine, XRGeometry, XRMaterial, XRMesh, XRScene, XRNode, Decorator } from './core';
import { Primitive, CameraPrimitive, SkyPrimitive } from './primitives';
import { XRTransformNode } from './core/XRTransformNode';
import { customElement } from 'lit/decorators';

export class ElementRegistry {
  static Instance = new ElementRegistry();

  private _elements: Record<string, typeof XRElement> = {};

  register(name: string, Ele: typeof XRElement) {
    this._elements[name] = Ele;

    ComponentRegistry.Instance.applyToElement(Ele);
    customElement(name)(Ele as any);
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
  static blackList = ['id', 'type', 'entity'];
  static Instance = new ComponentRegistry();

  private _components: Record<string, typeof Component> = {};

  register(name: string, component: typeof Component) {
    // name 黑名单
    if (ComponentRegistry.blackList.includes(name)) {
      throw new Error(`Component name ${name} is in black list`);
    }

    this._components[name] = component;
  }

  get(name: string) {
    return this._components[name];
  }

  has(name: string) {
    return !!this._components[name];
  }

  keys() {
    return Object.keys(this._components);
  }

  applyToElement(Ele: typeof XRElement) {
    Object.keys(this._components).forEach(key => {
      const Cls = this._components[key];
      if (!Cls) return;

      Decorator.property_String()(Ele.prototype, key);
    });
  }
}

// 1. 注册组件(必须先注册，否则下面 define 时会找不到注册组件导致报错)
// ComponentRegistry.Instance.register('camera', CameraComponent);
ComponentRegistry.Instance.register('geometry', GeometryComponent as any);
ComponentRegistry.Instance.register('material', MaterialComponent as any);
ComponentRegistry.Instance.register('animation', AnimationComponent as any);
ComponentRegistry.Instance.register('mesh', MeshComponent as any);
ComponentRegistry.Instance.register('position', PositionComponent as any);
ComponentRegistry.Instance.register('rotation', RotationComponent as any);
// ComponentRegistry.Instance.register('model', ModelComponent as any);

// 2. 注册原生元素
ElementRegistry.Instance.register('xr-engine', XREngine as any);
ElementRegistry.Instance.register('xr-scene', XRScene as any);
ElementRegistry.Instance.register('xr-geometry', XRGeometry as any);
ElementRegistry.Instance.register('xr-material', XRMaterial as any);
ElementRegistry.Instance.register('xr-mesh', XRMesh as any);
ElementRegistry.Instance.register('xr-node', XRNode as any);
ElementRegistry.Instance.register('xr-transform-node', XRTransformNode as any);
ElementRegistry.Instance.register('xr-animation', XRAnimation as any);
ElementRegistry.Instance.register('xr-keyframe', XRKeyFrame as any);

// 3. 注册 Primitive
// PrimitiveRegistry.Instance.register('xr-camera', CameraPrimitive);
// PrimitiveRegistry.Instance.register('xr-sky', SkyPrimitive);
