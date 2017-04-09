import React from 'react';
import katex from 'katex';

import Html from './html';

import 'katex/dist/katex.min.css';

export default ({ source, displayMode = true }) => {
  try {
    const latex = katex.renderToString(source, { displayMode });
    return (
      <Html source={latex} />
    );
  } catch (err) {
    return (
      <Html source={err.toString()} />
    );
  }
};
