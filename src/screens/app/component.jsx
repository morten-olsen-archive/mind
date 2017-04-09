import React from 'react';
import Panel from 'components/panel';

import Content from '../content';
import Sidebar from '../sidebar';
import './app.css';

const App = () => (
  <Panel horizontal width="100%" height="100%">
    <Sidebar />
    <Content />
  </Panel>
);

export default App;
