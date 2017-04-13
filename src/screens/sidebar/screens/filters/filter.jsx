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

};

NewFilter.defaultProps = {

};

export default NewFilter;
