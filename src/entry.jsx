import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { getInit } from 'utils/url';
import { setServer } from 'actions/sync';

import LocalStorageDB from 'data/localstorage';
// import HttpDB from 'data/http';
import { setDB } from 'data/data';

import { find } from 'actions/documents';
import createStore from 'store';

import App from 'screens/app';

setDB(new LocalStorageDB('demo'));
// setDB(new HttpDB('http://localhost:5000/sync', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDkzMjAxNTQ3fQ.jg8hI5U8X6b9N40BbFyfbJTH6L7qAR8x2OHYKT7-yuo'));
const store = createStore();

store.dispatch(find());

const root = global.document.createElement('div');
root.style.height = '100%';
global.document.body.appendChild(root);

const init = getInit();
if (init && init.name === 'set-token') {
  store.dispatch(setServer(init.data));
}

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
