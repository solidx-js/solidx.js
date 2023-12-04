import { Component } from '../core';
import { IDataType } from '../util';

export class IntensityComponent extends Component<number> {
  static dataType: IDataType = 'Number';

  get name() {
    return 'IntensityComponent';
  }

  update(): void {
    super.update();

    const entity = this.el.entity;
    if (!entity) return;

    entity.intensity = this.data || 0;
  }
}
