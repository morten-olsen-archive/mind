import * as reducerActions from 'actions/documents';

import find from './find';
import save from './save';


const AREA_NAME = '@@data/';
const actions = {
  find,
  save,
};

export default ({ dispatch }) => next => (action) => {
  const area = action.type.substring(0, AREA_NAME.length);
  if (area === AREA_NAME) {
    const type = action.type.substring(AREA_NAME.length);
    return Promise.resolve(actions[type.toLowerCase()](action.payload))
      .then((payload) => {
        dispatch({
          type: action.meta.responseType,
          payload,
        });
        if (type === 'SAVE') {
          dispatch(reducerActions.reload());
        }
      });
  } else {
    return next(action);
  }
};
