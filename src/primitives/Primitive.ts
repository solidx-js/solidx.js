import { XREntity } from '../core';
import { ComponentRegistry } from '../registry';
import { Schema } from '../util';

export class Primitive extends XREntity {
  constructor(
    readonly defaultComponents: Record<string, any> = {},
    readonly mappings: Record<string, string> = {}
  ) {
    super();
  }

  get name() {
    return 'Primitive';
  }

  init() {
    super.init();

    for (const [key, value] of Object.entries(this.defaultComponents)) {
      const Comp = ComponentRegistry.Instance.get(key);
      if (!Comp) {
        this.logger.warn(`Component not found: %s`, key);
        continue;
      }

      const stringified = Schema.stringify(Comp.schema, value);
      this.setAttribute(key, stringified);
    }
  }
}