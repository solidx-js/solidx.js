import { mount } from 'cypress-ct-lit';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      matchImageSnapshot: (opt?: any) => void;
    }
  }
}

Cypress.Commands.add('mount', mount);
addMatchImageSnapshotCommand({
  // 提高 image diff 容忍度, 避免因为浮点数精度问题导致的 diff
  customDiffConfig: { threshold: 0.15 },
  failureThreshold: 0.05,
  failureThresholdType: 'percent',
});
