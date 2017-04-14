import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children }) => (
  <li>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node,
};

ListItem.defaultProps = {
  children: undefined,
};

export default ListItem;
