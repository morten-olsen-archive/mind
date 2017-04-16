require('babel-polyfill');
const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
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
