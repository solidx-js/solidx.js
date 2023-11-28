import { CameraComponent, Component, GeometryComponent, MaterialComponent } from './components';
import { XREntity, XRNode, XREngine } from './core';
import { XRAssets } from './core/XRAssets';
import { XRScene } from './core/XRScene';
import { Primitive, CameraPrimitive, SkyPrimitive } from './primitives';
import { MeshSystem } from './system';
import { System } from './system/System';

import '@babylonjs/inspector';

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

/**
 * Represents a registry for systems.
 */
export class SystemRegistry {
  static Instance = new SystemRegistry();

  private _systems: Record<string, typeof System> = {};

  /**
   * Registers a system with the given name.
   * @param name - The name of the system.
   * @param system - The system to register.
   */
  register(name: string, system: typeof System) {
    this._systems[name] = system;
  }

  /**
   * Retrieves the system with the given name.
   * @param name - The name of the system.
   * @returns The system associated with the given name, or undefined if not found.
   */
  get(name: string) {
    return this._systems[name];
  }
}

// 1. 注册组件(必须先注册，否则下面 define 时会找不到注册组件导致报错)
ComponentRegistry.Instance.register('camera', CameraComponent);
ComponentRegistry.Instance.register('geometry', GeometryComponent as any);
ComponentRegistry.Instance.register('material', MaterialComponent as any);

// 2. 注册系统
SystemRegistry.Instance.register('mesh-system', MeshSystem);

// 3. 注册原生元素(engine -> scene -> assets -> entity -> node)
customElements.define('xr-engine', XREngine);
customElements.define('xr-scene', XRScene);
customElements.define('xr-assets', XRAssets);
customElements.define('xr-entity', XREntity);
customElements.define('xr-node', XRNode);

// 4. 注册 Primitive
PrimitiveRegistry.Instance.register('xr-camera', CameraPrimitive);
PrimitiveRegistry.Instance.register('xr-sky', SkyPrimitive);
