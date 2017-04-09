import React from 'react';
import Panel from 'components/panel';
import Item from './item.jsx';

const List = ({ documents, selectItem, selectedId }) => (
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

export default List;
