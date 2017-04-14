import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text, depth }) => {
  const Tag = `h${depth}`;
  return (
    <Tag>{text}</Tag>
  );
};

Header.defaultProps = {
  text: PropTypes.string,
  depth: PropTypes.number,
};

defaultProps = {
  text: undefined,
  depth: 1,
};

export default Header;
