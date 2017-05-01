import { connect } from 'react-redux';
import { select, create } from 'actions/documents';
import { sync } from 'actions/sync';
import { toggleFilters, setSidebarView } from 'actions/ui';
import Component from './component.jsx';

import List from './screens/list';
import Filters from './screens/filters';
import Calendar from './screens/calendar';

const views = {
  filters: Filters,
  list: List,
  calendar: Calendar,
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
  showView: (name) => {
    dispatch(setSidebarView(name));
  },
  onCreate: () => {
    dispatch(create());
  },
  onSync: () => {
    dispatch(sync());
  },
}))(Component);
