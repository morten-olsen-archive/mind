import React from 'react';
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

export default Filters;
