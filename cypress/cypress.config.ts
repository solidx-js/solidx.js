import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

const webpackConfig = {
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
      },
    ],
  },
};

export default defineConfig({
  projectId: 'iegcwx',
  e2e: {},
  component: {
    devServer: {
      framework: 'cypress-ct-lit' as any,
      bundler: 'webpack',
      webpackConfig,
    },
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});
