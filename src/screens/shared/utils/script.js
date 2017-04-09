import React from 'react';
import stageOne from 'babel-preset-stage-1';
import react from 'babel-preset-react';
import transformRuntime from 'babel-plugin-transform-runtime';
import { transform } from 'babel-core';

import load from 'components/code/load';
import Html from 'components/code/html';
import Latex from 'components/code/latex';
import Json from 'components/code/json';

const getToolBox = run => ({
  React,
  Latex,
  Html,
  Json,
  require: load(run),
});

const run = (source, exports, module) => {
  let transpileSource = null;
  const toolbox = getToolBox(run);
  transpileSource = transform(source, {
    presets: [stageOne, react],
    plugins: [transformRuntime],
  });
  const fn = new Function(...Object.keys(toolbox), 'exports', 'module', transpileSource.code); // eslint-disable-line
  fn(...Object.values(toolbox), exports, module);
};

export default run;
