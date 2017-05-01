import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import withState from 'middleware/with-state';
import data from 'middleware/data';
import after from 'middleware/after';
import sync from 'middleware/sync';

import documents from 'reducers/documents';
import search from 'reducers/search';
import ui from 'reducers/ui';
import server from 'reducers/server';

export default () => createStore(
  combineReducers({
    documents,
    search,
    ui,
    server,
  }),
  composeWithDevTools(
    applyMiddleware(
      withState,
      after,
      data,
      sync,
    ),
  ),
);
