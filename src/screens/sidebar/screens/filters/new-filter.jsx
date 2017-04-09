import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/panel';

const NewFilter = ({
  filter,
  setField,
  setType,
  setValue,
  addFilter,
}) => (
  <Panel>
    <input
      onChange={evt => setField(evt.target.value)}
      value={filter.field}
    />
    <input
      onChange={evt => setType(evt.target.value)}
      value={filter.type}
    />
    <input
      onChange={evt => setValue(evt.target.value)}
      value={filter.value}
    />
    <button onClick={() => addFilter(filter)}>
      Save
    </button>
  </Panel>
);

NewFilter.propTypes = {

};

NewFilter.defaultProps = {

};

export default NewFilter;
