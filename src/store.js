import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import withState from 'middleware/with-state';
import data from 'middleware/data';
import after from 'middleware/after';

import documents from 'reducers/documents';
import search from 'reducers/search';
import ui from 'reducers/ui';

export default () => createStore(
  combineReducers({
    documents,
    search,
    ui,
  }),
  composeWithDevTools(
    applyMiddleware(
      withState,
      after,
      data,
    ),
  ),
);
