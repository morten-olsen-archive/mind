import React from 'react';
import PropTypes from 'prop-types';
import DocumentPropType from 'prop-types/document';
import Panel from 'components/panel';
import Toolbar from 'components/toolbar';
import Button from 'components/toolbar/button';
import Fill from 'components/toolbar/fill';

import styles from './content.css';

const Content = ({
  views,
  document,
  onSave,
  onTitleChanged,
  onRemove,
  toggleContentView,
}) => (
  <Panel fill className={styles.content}>
    <Toolbar>
      <Button icon="mode_edit" />
      <Button
        selected={!!views.editor}
        icon="code"
        onClick={() => toggleContentView('editor')}
      />
      <Button
        selected={!!views.preview}
        icon="laptop"
        onClick={() => toggleContentView('preview')}
      />
      <Fill />
      <Button
        className={document.dirty ? styles.dirty : undefined}
        icon="done"
        onClick={() => onSave(document)}
      />
      {
        !!document.id
        && <Button icon="remove_circle_outline" onClick={() => onRemove(document.id)} />
      }
      <Button icon="more_vert" />
    </Toolbar>
    <Toolbar theme="light" className={styles.toolbar}>
      <input onChange={evt => onTitleChanged(evt.target.value)} value={document.title || ''} />
    </Toolbar>
    <Panel fill horizontal>
      {Object.keys(views).map((key) => {
        const View = views[key];
        return (
          <Panel key={key} fill scroll className={styles.view}>
            <View />
          </Panel>
        );
      })}
    </Panel>
  </Panel>
);

Content.propTypes = {
  views: PropTypes.shape({
    editor: PropTypes.func,
    preview: PropTypes.func,
  }),
  document: DocumentPropType.isRequired,
  onSave: PropTypes.func,
  onTitleChanged: PropTypes.func,
  onRemove: PropTypes.func,
  toggleContentView: PropTypes.func,
};

Content.defaultProps = {
  views: {},
  onSave: () => {},
  onTitleChanged: () => {},
  onRemove: () => {},
  toggleContentView: () => {},
};

export default Content;
