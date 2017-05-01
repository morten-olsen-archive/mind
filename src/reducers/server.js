import { withLocalStorage } from 'utils/reducer';
import uuid from 'uuid';

const defaultState = {};

export default withLocalStorage('server', defaultState, (state, action) => {
  switch (action.type) {
    case '@@sync/SET_SERVER': {
      return {
        ...state,
        ...action.payload,
        client: uuid.v4(),
      };
    }
    default: {
      return state;
    }
  }
});
