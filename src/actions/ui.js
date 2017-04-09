export const toggleContentView = name => ({
  type: 'TOGGLE_CONTENT_VIEW',
  payload: name,
});

export const toggleFilters = () => state => ({
  type: 'SET_SIDEBAR_VIEW',
  payload: state.ui.sidebarView === 'filters' ? 'list' : 'filters',
});

export const setContentView = name => ({
  type: 'SET_CONTENT_VIEW',
  payload: name,
});

export const setSidebarView = name => ({
  type: 'SET_SIDEBAR_VIEW',
  payload: name,
});
