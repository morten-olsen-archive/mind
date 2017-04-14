import React from 'react';
import PropTypes from 'prop-types';
import Text from './text';

const Paragraph = ({ text }) => (
  <p>
    <Text>
      {text}
    </Text>
  </p>
);

Paragraph.propTypes = {
  text: PropTypes.string,
};

Paragraph.defaultProps = {
  text: undefined,
};

export default Paragraph;
