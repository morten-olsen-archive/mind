import React from 'react';
import PropTypes from 'prop-types';

const Glyph = ({ name, ...others }) => {
  const svg = require(`icons/${name}.svg`); // eslint-disable-line
  return (
    <div dangerouslySetInnerHTML={{ __html: svg }} {...others} /> // eslint-disable-line
  );
};

Glyph.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Glyph;
