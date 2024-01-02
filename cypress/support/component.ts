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
addMatchImageSnapshotCommand({
  customDiffConfig: { threshold: 0.15 }, // 提高 image diff 容忍度, 避免因为浮点数精度问题导致的 diff
});

Cypress.Commands.add('bootstrap', () => {
  const style = document.createElement('style');
  style.innerHTML = `
    xr-scene {
      width: 256px;
      height: 256px;
      ---hardware-scaling-level: 1;
    }
  `;
  document.head.appendChild(style);
});
