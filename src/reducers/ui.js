const defaultState = {
  contentViews: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CONTENT_VIEW': {
      return {
        ...state,
        contentViews: [action.payload],
      };
    }
    case 'TOGGLE_CONTENT_VIEW': {
      const index = state.contentViews.findIndexOf(action.payload);
      if (index >= 0) {
        return {
          ...state,
          contentViews: state.contentViews.filter(v => v !== action.payload),
        };
      } else {
        return {
          ...state,
          contentViews: [...state.contentViews, action.payload],
        };
      }
    }
    case 'SET_SIDEBAR_VIEW': {
      return {
        ...state,
        sidebarView: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
