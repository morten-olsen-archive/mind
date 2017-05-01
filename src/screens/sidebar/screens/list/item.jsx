import React from 'react';
import PropTypes from 'prop-types';
import DocumentPropType from 'prop-types/document';
import classnames from 'classnames';
import Panel from 'components/panel';
import styles from './item.css';

const ListItem = ({
  item,
  id,
  selectItem,
  title,
  selectedId,
}) => (
  <Panel
    onClick={() => selectItem(item)}
    padding={15}
    className={classnames(styles.item, {
      [styles.updated]: item.flag === 'updated',
      [styles.selected]: id === selectedId,
    })}
  >
    {title}
  </Panel>
);

ListItem.propTypes = {
  item: DocumentPropType.isRequired,
  id: PropTypes.string.isRequired,
  selectItem: PropTypes.func,
  title: PropTypes.string.isRequired,
  selectedId: PropTypes.string,
};

ListItem.defaultProps = {
  selectItem: () => {},
  selectedId: undefined,
};

export default ListItem;
