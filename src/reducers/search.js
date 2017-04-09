const defaultState = {
  userFilters: [],
  viewFilters: [],
  sort: null,
  currentFilter: {
    field: '',
    type: '=',
    value: '',
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_FIELDS': {
      return {
        ...state,
        currentFilter: {
          ...state.currentFilter,
          ...action.payload,
        },
      };
    }
    case 'SET_VIEW_FILTERS': {
      return {
        ...state,
        viewFilters: action.payload,
      };
    }
    case 'ADD_FILTER': {
      return {
        ...state,
        userFilters: [...state.userFilters, action.payload],
      };
    }
    case 'SET_FILTER': {
      const newState = {
        ...state,
      };
      newState.userFilters[action.payload.index] = action.payload.newFilter;
      return newState;
    }
    case 'REMOVE_FILTER': {
      const newState = {
        ...state,
      };
      newState.userFilters.splice(action.payload, 1);
      return newState;
    }
    default: {
      return state;
    }
  }
};
