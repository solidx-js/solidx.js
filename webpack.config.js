const pkg = require('./package.json');
const Path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const assetsData = require('./assets.json');

const VERSION = pkg.version;
const DEFINED_ENV = { VERSION: JSON.stringify(VERSION) };

Object.keys(assetsData).forEach(key => {
  DEFINED_ENV[key] = JSON.stringify(assetsData[key]);
});

const commonConfigBase = {
  entry: { index: './src/index.ts' },
  mode: 'production',
  plugins: [new webpack.DefinePlugin(DEFINED_ENV)],
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
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: { chunks: 'async' },
  },
};

const e2eConfig = {
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
  plugins: [
    new webpack.DefinePlugin({
      ...DEFINED_ENV,
      DEFAULT_ENV_MAP: JSON.stringify('/~/solidx-assets/texture/EnvMap_3.0-256.env'),
      DEFAULT_SKY_TEXTURE: JSON.stringify('/~/solidx-assets/texture/Skybox_2.0-256.dds'),
      DEFAULT_GROUND_TEXTURE: JSON.stringify('/~/solidx-assets/texture/Ground_2.0-256.png'),
    }),
  ],
  devServer: {
    allowedHosts: 'all',
    client: { progress: true, overlay: false },
    static: [
      { directory: Path.resolve(__dirname, 'cypress/fixtures') },
      { directory: Path.resolve(__dirname, 'node_modules/solidx-assets'), publicPath: '/~/solidx-assets' },
    ],
  },
};

module.exports = function (env) {
  if (env['umd-server']) {
    return merge(commonConfigBase, {
      mode: 'development',
      output: {
        filename: '[name].js',
        library: 'SOLIDX',
        libraryTarget: 'umd',
        globalObject: 'this',
        publicPath: 'http://localhost:8080/',
      },
      devServer: {
        allowedHosts: 'all',
        client: { progress: true, overlay: false },
        static: [
          { directory: Path.resolve(__dirname, 'cypress/fixtures') },
          { directory: Path.resolve(__dirname, 'node_modules/solidx-assets'), publicPath: '/solidx-assets' },
        ],
      },
    });
  }

  return [
    // umd
    merge(commonConfigBase, {
      output: {
        filename: '[name].js',
        library: 'SOLIDX',
        libraryTarget: 'umd',
        globalObject: 'this',
      },
    }),

    // umd max
    merge(commonConfigBase, {
      output: {
        filename: '[name].max.js',
        library: 'SOLIDX',
        libraryTarget: 'umd',
        globalObject: 'this',
      },
      optimization: { minimize: false },
    }),
  ];
};

module.exports.DEFINED_ENV = DEFINED_ENV;
module.exports.e2eConfig = e2eConfig;
