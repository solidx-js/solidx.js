const pkg = require('./package.json');
const Path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const VERSION = pkg.version;
const DEFINED_ENV = {
  VERSION: JSON.stringify(VERSION),
  'process.env.NODE_ENV': JSON.stringify('production'),
};

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
      {
        test: /\.(glsl)$/i,
        type: 'asset/source',
      },
    ],
  },
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
  output: {
    library: 'SOLIDX',
    libraryTarget: 'umd',
    globalObject: 'this',
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
  plugins: [new webpack.DefinePlugin({ ...DEFINED_ENV, 'process.env.NODE_ENV': JSON.stringify('development') })],
  devServer: {
    allowedHosts: 'all',
    client: { progress: true, overlay: false },
    static: [{ directory: Path.resolve(__dirname, 'cypress/fixtures') }, { directory: Path.resolve(__dirname, 'assets') }],
  },
};

module.exports = function (env) {
  if (env) {
    if (env.local) {
      return merge(commonConfigBase, localServerConfig, {
        plugins: glob
          .sync('./demo/**/*.html', { nodir: true })
          .map(file => new HtmlWebpackPlugin({ filename: file.replace('demo/', ''), template: file })),
      });
    }

    if (env['rt-emit']) {
      return merge(
        { ...commonConfigBase, entry: { 'rt-emit': './rt-emit.ts' } },
        {
          output: {
            path: Path.resolve(__dirname, 'node_modules', '.cache'),
            filename: '[name].js',
          },
          mode: 'development',
          plugins: [new webpack.DefinePlugin({ ...DEFINED_ENV, 'process.env.NODE_ENV': JSON.stringify('development') })],
          devtool: false,
          target: 'node',
          optimization: { splitChunks: false },
        }
      );
    }
  }

  // 下面是 umd 的配置
  const _umdConfig = {
    output: {
      library: 'SOLIDX',
      libraryTarget: 'umd',
      globalObject: 'this',
      // 指向公共 CDN
      publicPath: 'https://registry.npmmirror.com/solidx.js/latest/files/dist/',
    },
    plugins: [new webpack.DefinePlugin(DEFINED_ENV)],
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
      {
        test: /\.inline\.css$/i,
        type: 'asset/source',
      },
    ],
  },
});
