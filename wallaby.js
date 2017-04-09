const wallabyWebpack = require('wallaby-webpack');
const config = require('./webpack.config.js');
require('babel-polyfill');

const wallabyPostprocessor = wallabyWebpack(config);

module.exports = wallaby => ({
  files: [
    { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false },
    { pattern: 'src/**/*.js', load: false },
    { pattern: 'src/**/*.test.js', ignore: true },
  ],

  tests: [
    { pattern: 'src/**/*.test.js', load: false },
  ],

  postprocessor: wallabyPostprocessor,

  testFramework: 'mocha',

  setup: () => {
    wallaby.testFramework.ui('tdd');
    window.__moduleBundler.loadTests(); // eslint-disable-line
  },
});
