import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';

import 'highlight.js/styles/railscasts.css';

import Html from './html';
import Latex from './latex';
import Output from './output.jsx';

const renderBox = (source, language, settings) => {
  if (settings.includes('hidden')) return '';

  if (language === 'latex') {
    return <Latex source={source} />;
  }
  const highlighted = hljs.highlight('javascript', source).value;
  return (
    <pre>
      <Html tag="code" source={highlighted} />
    </pre>
  );
};

const Code = ({ text: code, lang: language }) => {
  let settings = [];
  const output = [];
  const foundSettings = /\/\/ settings:(.*)\n/g.exec(code);
  if (foundSettings && foundSettings.length > 1) {
    settings = foundSettings[1].split(',').map(s => s.trim());
  }
  output.push(renderBox(code, language, settings));
  if (language === 'javascript') {
    output.push(<Output source={code} settings={settings} exports={exports} />);
  }
  return React.createElement(
    'div',
    {},
    ...output,
  );
};

Code.propTypes = {
  text: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Code;
