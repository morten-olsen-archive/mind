import React from 'react';
import Panel from 'components/panel';
import Toolbar from 'components/toolbar';
import Button from 'components/toolbar/button';
import Fill from 'components/toolbar/fill';

import styles from './sidebar.css';

const Sidebar = ({ View, documents, selectItem, toggleFilters }) => (
  <Panel width={300}>
    <Toolbar>
      <Button icon="menu" />
      <Button icon="account_circle" />
      <Button icon="settings" />
      <Fill />
      <Button icon="add_circle_outline" />
      <Button icon="sliders" onClick={toggleFilters} />
    </Toolbar>
    <Panel fill scroll className={styles.sidebar}>
      <View documents={documents} selectItem={selectItem} />
    </Panel>
  </Panel>
);

export default Sidebar;
