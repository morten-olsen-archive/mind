import React from 'react';
import PropTypes from 'prop-types';

const Code = ({ text }) => (
  <pre><code>{text}</code></pre>
);

Code.propTypes = {
  text: PropTypes.string,
};

Code.defaultProps = {
  text: '',
};

export default Code;
