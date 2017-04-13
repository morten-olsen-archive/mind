import { connect } from 'react-redux';
import { addFilter, removeFilter, setFields } from 'actions/search';
import Component from './component.jsx';

export default connect(state => ({
  filters: state.search.userFilters,
  currentFilter: state.search.currentFilter,
}), dispatch => ({
  addFilter: ({ not, field, type, value }) => {
    dispatch(addFilter(not, field, type, value));
  },
  removeFilter: (index) => {
    dispatch(removeFilter(index));
  },
  setField: (value) => {
    dispatch(setFields({
      field: value,
    }));
  },
  setNot: (value) => {
    dispatch(setFields({
      not: value,
    }));
  },
  setType: (value) => {
    dispatch(setFields({
      type: value,
    }));
  },
  setValue: (value) => {
    dispatch(setFields({
      value,
    }));
  },
}))(Component);
