const pkg = require('./package.json');
const Path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const VERSION = pkg.version;
const DEFINED_ENV = { VERSION: JSON.stringify(VERSION) };

const commonConfigBase = {
  entry: { index: './src/index.ts' },
  mode: 'production',
  output: {
    path: Path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true,
              transpileOnly: true,
              configFile: 'tsconfig.build.json',
              compilerOptions: {
                declaration: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(env|dds|png|jpg|zip|glb|gltf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new webpack.DefinePlugin(DEFINED_ENV)],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  optimization: {
    splitChunks: { chunks: 'async' },
  },
};

const localServerConfig = {
  mode: 'development',
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
  devServer: {
    allowedHosts: 'all',
    client: { progress: true, overlay: false },
    static: [{ directory: Path.resolve(__dirname, 'cypress/fixtures') }, { directory: Path.resolve(__dirname, 'assets') }],
  },
};

module.exports = function (env) {
  if (env && env.local) {
    return merge(commonConfigBase, localServerConfig, {
      plugins: glob
        .sync('./demo/**/*.html', { nodir: true })
        .map(file => new HtmlWebpackPlugin({ filename: file.replace('demo/', ''), template: file })),
    });
  }

  // 下面是 umd 的配置

  const _umdConfig = {
    output: { library: 'SOLIDX', libraryTarget: 'umd', globalObject: 'this', publicPath: 'https://unpkg.com/solidx.js/dist/' },
  };

  return [
    // umd
    merge(commonConfigBase, _umdConfig, {
      output: { filename: '[name].js' },
    }),

    // umd max
    merge(commonConfigBase, _umdConfig, {
      output: { filename: '[name].max.js' },
      optimization: { minimize: false },
    }),
  ];
};

module.exports.e2eConfig = merge(localServerConfig, {
  module: {
    rules: [
      {
        test: /\.(env|dds|png|jpg|zip|glb|gltf)$/i,
        type: 'asset/resource',
      },
    ],
  },
});
