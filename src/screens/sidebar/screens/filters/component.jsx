import React from 'react';
import Panel from 'components/panel';
import Filter from './filter.jsx';
import NewFilter from './new-filter.jsx';

const Filters = ({
  filters,
  currentFilter,
  setField,
  setType,
  setValue,
  addFilter,
}) => (
  <Panel>
    {filters.map(filter => (
      <Filter
        {...filter}
      />
    ))}
    <NewFilter
      filter={currentFilter}
      setField={setField}
      setType={setType}
      setValue={setValue}
      addFilter={addFilter}
    />
  </Panel>
);

export default Filters;
