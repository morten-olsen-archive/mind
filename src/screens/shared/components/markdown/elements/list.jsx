import React from 'react';
import PropTypes from 'prop-types';

const List = ({ children }) => (
  <ul>
    {children}
  </ul>
);

List.propTypes = {
  children: PropTypes.node,
};

List.defaultProps = {
  children: undefined,
};

export default List;
