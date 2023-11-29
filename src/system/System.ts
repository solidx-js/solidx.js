import { ComponentLike } from '../core/ComponentLike';

export class System extends ComponentLike {

  readonly logger = this.el.logger.extend(this.name);

  get name() {
    return 'System';
  }
}
