import { connect } from 'react-redux';
import { save, setFields } from 'actions/documents';
import Component from './component.jsx';

import Editor from './screens/editor';
import Preview from './screens/preview';

const views = {
  editor: Editor,
  preview: Preview,
};

export default connect(state => ({
  views: [Editor, Preview],
  document: state.documents.selected,
}), dispatch => ({
  onSave: (document) => {
    dispatch(save(document));
  },
  onTitleChanged: (title) => {
    dispatch(setFields({
      title,
    }));
  },
}))(Component);
