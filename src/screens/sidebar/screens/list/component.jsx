import React from 'react';
import PropTypes from 'prop-types';
import DocumentPropType from 'prop-types/document';
import Panel from 'components/panel';
import Item from './item.jsx';

const List = ({
  documents,
  selectItem,
  selectedId,
}) => (
  <Panel fill>
    {documents.map(document => (
      <Item
        key={document.id}
        item={document}
        selectedId={selectedId}
        {...document}
        selectItem={selectItem}
      />
    ))}
  </Panel>
);

List.propTypes = {
  documents: PropTypes.arrayOf(DocumentPropType),
  selectItem: PropTypes.func,
  selectedId: PropTypes.string,
};

List.defaultProps = {
  documents: [],
  selectItem: () => {},
  selectedId: undefined,
};

export default List;
