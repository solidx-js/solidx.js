import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';
import { resolve } from 'path';

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
      {
        test: /\.(env|dds|png|jpg|zip|glb|gltf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    allowedHosts: 'all',
    client: { progress: true, overlay: false },
    static: {
      directory: resolve(__dirname, 'fixtures'),
    },
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
