import './commands';

import { mount } from 'cypress-ct-lit';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      bootstrap: () => void;
      matchImageSnapshot: (opt?: any) => void;
    }
  }
}

Cypress.Commands.add('mount', mount);
addMatchImageSnapshotCommand();
