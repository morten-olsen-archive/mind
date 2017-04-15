const defaultState = {
  items: [],
  selected: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'DOCUMENTS_FOUND': {
      return {
        ...state,
        items: action.payload,
      };
    }
    case 'DOCUMENT_SELECTED': {
      return {
        ...state,
        selected: action.payload,
      };
    }
    case 'DOCUMENT_SET_FIELD': {
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.payload,
          dirty: true,
        },
      };
    }
    case 'DOCUMENT_SAVE': {
      return {
        ...state,
        selected: {
          ...action.payload.document,
          dirty: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
