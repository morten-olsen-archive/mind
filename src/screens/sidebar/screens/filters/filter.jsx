import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/panel';

const NewFilter = ({
  field,
  type,
  value,
}) => (
  <Panel>
    {field} {type} {value}
  </Panel>
);

NewFilter.propTypes = {

};

NewFilter.defaultProps = {

};

export default NewFilter;
