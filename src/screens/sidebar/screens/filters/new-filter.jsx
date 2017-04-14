import React from 'react';
import PropTypes from 'prop-types';
import FilterPropType from 'prop-types/filter';
import Glyph from 'components/glyph';
import Panel from 'components/panel';
import styles from './new-filter.css';

const NewFilter = ({
  filter,
  setNot,
  setField,
  setType,
  setValue,
  addFilter,
}) => (
  <Panel horizontal>
    {filter.not ? (
      <button
        onClick={() => setNot(false)}
        className={styles.button}
      >
        &#8869;
      </button>
    ) : (
      <button
        className={styles.button}
        onClick={() => setNot(true)}
      >
        &#8868;
      </button>
    )}
    <input
      className={styles.field}
      onChange={evt => setField(evt.target.value)}
      value={filter.field}
      placeholder="Field"
    />
    <select
      className={styles.type}
      onChange={evt => setType(evt.target.value)}
      value={filter.type}
    >
      <option value="=">=</option>
      <option value=">">&lt;</option>
      <option value=">=">&gt;=</option>
      <option value="<">&lt;</option>
      <option value="<=">&lt;=</option>
      <option value="includes">&isin;</option>
    </select>
    <input
      className={styles.value}
      onChange={evt => setValue(evt.target.value)}
      value={filter.value}
      placeholder="Value"
    />
    <Glyph
      className={styles.button}
      name="add"
      onClick={() => addFilter(filter)}
    />
  </Panel>
);

NewFilter.propTypes = {
  filter: FilterPropType,
  setNot: PropTypes.func,
  setField: PropTypes.func,
  setType: PropTypes.func,
  setValue: PropTypes.func,
  addFilter: PropTypes.func,
};

NewFilter.defaultProps = {
  filter: {},
  setNot: () => {},
  setField: () => {},
  setType: () => {},
  setValue: () => {},
  addFilter: () => {},
};

export default NewFilter;
