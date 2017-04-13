import React from 'react';
import PropTypes from 'prop-types';
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
}) => (
  <Panel fill>
    <Toolbar>
      <Button icon="mode_edit" />
      <Button icon="code" />
      <Button icon="laptop" />
      <Fill />
      <Button icon="github" />
      <Button icon="done" onClick={() => onSave(document)} />
      <Button icon="more_vert" />
    </Toolbar>
    <Toolbar theme="light" className={styles.toolbar}>
      <input onChange={evt => onTitleChanged(evt.target.value)} value={document.title || ''} />
    </Toolbar>
    <Panel fill horizontal>
      {views.map(View => (
        <Panel fill scroll>
          <View />
        </Panel>
      ))}
    </Panel>
  </Panel>
);

Content.propTypes = {
};

Content.defaultProps = {
};

export default Content;
