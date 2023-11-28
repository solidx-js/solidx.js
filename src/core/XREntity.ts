import { Component } from '../components';
import { ComponentRegistry } from '../registry';
import { Schema } from '../util';
import { XRNode } from './XRNode';
import { difference, range } from 'lodash';

export class XREntity extends XRNode {
  components: Record<string, Component> = {};

  get name() {
    return 'XREntity';
  }

  private _flushComponents() {
    const existKeys = Object.keys(this.components);
    const newKeys = range(this.attributes.length).map(i => this.attributes[i].name);

    const removedKeys = difference(existKeys, newKeys);
    const addedKeys = difference(newKeys, existKeys);
    const updatedKeys = difference(newKeys, addedKeys);

    // 1. Remove components that are no longer in the entity
    for (const key of removedKeys) {
      this.components[key].remove();
    }

    const _getValue = (Comp: typeof Component, key: string) => {
      return Schema.parse(Comp.schema, this.getAttribute(key) || Comp.schema.default);
    };

    // 2. Add new components
    for (const key of addedKeys) {
      const Comp = ComponentRegistry.Instance.get(key);
      if (!Comp) continue;

      const comp = new Comp(this, key);
      comp.init();

      const value = _getValue(Comp, key);
      comp.flush(value);
    }

    // 3. Update existing components
    for (const key of updatedKeys) {
      const Comp = ComponentRegistry.Instance.get(key);
      if (!Comp) continue;

      const value = _getValue(Comp, key);
      this.components[key].flush(value);
    }
  }

  init(): void {
    super.init();
    this._flushComponents();
  }

  update(attr: string | null, oldVal: string | null, newVal: string | null): void {
    this._flushComponents();
  }

  remove(): void {
    super.remove();

    for (const component of Object.values(this.components)) {
      component.remove();
    }
  }
}
