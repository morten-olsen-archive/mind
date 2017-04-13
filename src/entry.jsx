import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import LocalStorageDB from 'data/localstorage';
import { setDB } from 'data/data';

import { find } from 'actions/documents';
import createStore from 'store';

import App from 'screens/app';

setDB(new LocalStorageDB('demo'));
const store = createStore();

store.dispatch(find());

const root = global.document.createElement('div');
root.style.height = '100%';
global.document.body.appendChild(root);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('screens/app', () => {
    const NextRootContainer = require('screens/app');
    render(NextRootContainer);
  });
}
