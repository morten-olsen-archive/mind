import React from 'react';
import PropTypes from 'prop-types';
import DocumentPropType from 'prop-types/document';
import Panel from 'components/panel';
import Toolbar from 'components/toolbar';
import Button from 'components/toolbar/button';
import Fill from 'components/toolbar/fill';
import List from './screens/list';
import Filters from './screens/filters';
import Calendar from './screens/calendar';

import styles from './sidebar.css';

const Sidebar = ({
  View,
  documents,
  selectItem,
  toggleFilters,
  onCreate,
  showView,
  onSync,
}) => (
  <Panel width={250}>
    <Toolbar>
      <Button icon="menu" />
      <Button icon="account_circle" />
      <Button icon="settings" onClick={onSync} />
      <Fill />
      <Button icon="add_circle_outline" onClick={onCreate} />
      <Button
        selected={View === Filters}
        icon="sliders"
        onClick={toggleFilters}
      />
    </Toolbar>
    <Panel fill scroll className={styles.sidebar}>
      <View documents={documents} selectItem={selectItem} />
    </Panel>
    <Toolbar>
      <Fill />
      <Button
        selected={View === List}
        icon="format_align_justify"
        onClick={() => showView('list')}
      />
      <Button
        selected={View === Calendar}
        icon="grip"
        onClick={() => showView('calendar')}
      />
      <Fill />
    </Toolbar>
  </Panel>
);

Sidebar.propTypes = {
  View: PropTypes.func.isRequired,
  documents: PropTypes.arrayOf(DocumentPropType),
  selectItem: PropTypes.func,
  toggleFilters: PropTypes.func,
  onCreate: PropTypes.func,
  showView: PropTypes.func,
};

Sidebar.defaultProps = {
  documents: [],
  selectItem: () => {},
  toggleFilters: () => {},
  onCreate: () => {},
  showView: () => {},
};

export default Sidebar;
