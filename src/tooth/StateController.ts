import { ReactiveController } from 'lit';
import { XROrtho } from './XROrtho';
import { prepare } from './prepare';

export class StateController implements ReactiveController {
  constructor(private host: XROrtho) {
    this.host.addController(this);
  }

  hostConnected() {
    // FIXME: test

    prepare().then(data => {
      this.host.datasource = data;
      this.host._loading = false;
      console.log('@@@', 'data ->', data);
    });
  }
}
