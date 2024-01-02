import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

export default defineConfig({
  projectId: 'iegcwx',
  e2e: {},
  component: {
    devServer: {
      framework: 'cypress-ct-lit' as any,
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});
