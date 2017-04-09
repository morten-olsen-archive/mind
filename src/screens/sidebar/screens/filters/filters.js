import { connect } from 'react-redux';
import { addFilter, setFields } from 'actions/search';
import Component from './component.jsx';

export default connect(state => ({
  filters: state.search.userFilters,
  currentFilter: state.search.currentFilter,
}), dispatch => ({
  addFilter: ({ field, type, value }) => {
    dispatch(addFilter(field, type, value));
  },
  setField: (value) => {
    dispatch(setFields({
      field: value,
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
