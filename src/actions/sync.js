import { getDB } from 'data/data';
import HttpDB from 'data/http';
import { resetUpdated, reload } from 'actions/documents';

export const setServer = settings => ({
  type: '@@sync/SET_SERVER',
  payload: settings,
  meta: {
    after: resetUpdated(),
  },
});

export const sync = () => state => ({
  type: '@@sync/START',
  payload: {
    from: getDB(),
    to: new HttpDB(
      state.server.url,
      state.server.token,
      state.server.client,
    ),
  },
  meta: {
    after: reload(),
  },
});
