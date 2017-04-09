import { connect } from 'react-redux';
import { select } from 'actions/documents';
import { toggleFilters } from 'actions/ui';
import Component from './component.jsx';

import List from './screens/list';
import Filters from './screens/filters';

const views = {
  filters: Filters,
  list: List,
};

export default connect(state => ({
  View: views[state.ui.sidebarView || 'list'],
  documents: state.documents.items,
}), dispatch => ({
  selectItem: (item) => {
    dispatch(select(item));
  },
  toggleFilters: () => {
    dispatch(toggleFilters());
  },
}))(Component);
