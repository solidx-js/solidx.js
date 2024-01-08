import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';
import { e2eConfig } from '../webpack.config.js';

export default defineConfig({
  projectId: 'iegcwx',
  e2e: {},
  component: {
    devServer: {
      framework: 'cypress-ct-lit' as any,
      bundler: 'webpack',
      webpackConfig: e2eConfig,
    },
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
    experimentalSingleTabRunMode: true,
  },
});
