import React from 'react';
import classnames from 'classnames';
import Panel from 'components/panel';
import styles from './item.css';

const ListItem = ({ item, id, selectItem, title, selectedId }) => (
  <Panel
    onClick={() => selectItem(item)}
    padding={15}
    className={classnames(styles.item, {
      [styles.selected]: id === selectedId,
    })}
  >
    {title}
  </Panel>
);

export default ListItem;
