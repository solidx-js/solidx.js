const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const VERSION = pkg.version;

const commonConfigBase = {
  entry: { index: './src/index.ts' },
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(VERSION),
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
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

const commonConfig = [
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

module.exports = env => {
  return commonConfig;
};
