import React from 'react';
import PropTypes from 'prop-types';
import DocumentPropType from 'prop-types/document';
import Panel from 'components/panel';
import Toolbar from 'components/toolbar';
import Button from 'components/toolbar/button';
import Fill from 'components/toolbar/fill';

import styles from './sidebar.css';

const Sidebar = ({
  View,
  documents,
  selectItem,
  toggleFilters,
}) => (
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

Sidebar.propTypes = {
  View: PropTypes.func.isRequired,
  documents: PropTypes.arrayOf(DocumentPropType),
  selectItem: DocumentPropType,
  toggleFilters: PropTypes.bool,
};

Sidebar.defaultProps = {
  documents: [],
  selectItem: undefined,
  toggleFilters: () => {},
};

export default Sidebar;
