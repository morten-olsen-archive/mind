const path = require('path');
const webpack = require('webpack');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/entry.jsx'),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'docs'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
      'shared',
      'web_modules',
    ],
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: 'node_modules/monaco-editor/min/vs',
      to: 'vs',
    }, {
      from: path.join(__dirname, 'node_modules/katex/dist/fonts'),
      to: path.join(__dirname, 'docs/fonts'),
    }, {
      from: path.join(__dirname, 'electron'),
      to: path.join(__dirname, 'docs'),
    }]),
    new webpack.HotModuleReplacementPlugin(),
    new ContextReplacementPlugin(/[^/]+\.svg$/),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1', 'react'],
          plugins: ['react-hot-loader/babel'],
          compact: false,
        },
      }],
    }, {
      test: /\.css$/,
      include: path.join(__dirname, 'src'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    }, {
      test: /\.css/,
      include: path.join(__dirname, 'node_modules'),
      use: [
        'style-loader/url',
        'file-loader',
      ],
    }, {
      test: /\.(png|woff|woff2|eot|ttf)$/,
      loader: 'file-loader',
    }, {
      test: /\.(txt|svg)$/,
      loader: 'raw-loader',
    }],
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    module: 'empty',
    net: 'empty',
    readline: 'empty',
  },
};
