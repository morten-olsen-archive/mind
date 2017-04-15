import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/panel';

const NewFilter = ({
  field,
  type,
  value,
  removeFilter,
}) => (
  <Panel onClick={removeFilter}>
    {field} {type} {value}
  </Panel>
);

NewFilter.propTypes = {
  field: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  removeFilter: PropTypes.func,
};

NewFilter.defaultProps = {
  removeFilter: () => {},
};

export default NewFilter;
