import React from 'react';
import PropTypes from 'prop-types';
import FilterPropType from 'prop-types/filter';
import Panel from 'components/panel';
import Filter from './filter.jsx';
import NewFilter from './new-filter.jsx';

const Filters = ({
  filters,
  currentFilter,
  setField,
  setType,
  setNot,
  setValue,
  addFilter,
  removeFilter,
}) => (
  <Panel>
    {filters.map((filter, i) => (
      <Filter
        removeFilter={() => removeFilter(i)}
        {...filter}
      />
    ))}
    <NewFilter
      filter={currentFilter}
      setNot={setNot}
      setField={setField}
      setType={setType}
      setValue={setValue}
      addFilter={addFilter}
    />
  </Panel>
);

Filters.propTypes = {
  filters: PropTypes.arrayOf(FilterPropType),
  currentFilter: FilterPropType,
  setField: PropTypes.func,
  setType: PropTypes.func,
  setNot: PropTypes.func,
  setValue: PropTypes.func,
  addFilter: PropTypes.func,
  removeFilter: PropTypes.func,
};

Filters.defaultProps = {
  filters: [],
  currentFilter: {},
  setField: () => {},
  setType: () => {},
  setNot: () => {},
  setValue: () => {},
  addFilter: () => {},
  removeFilter: () => {},
};

export default Filters;
