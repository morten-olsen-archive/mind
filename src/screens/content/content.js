import { connect } from 'react-redux';
import { toggleContentView } from 'actions/ui';
import { save, setFields, remove } from 'actions/documents';
import Component from './component.jsx';

import Editor from './screens/editor';
import Preview from './screens/preview';

const views = {
  editor: Editor,
  preview: Preview,
};

const getViews = state =>
  state.ui.contentViews.reduce((output, view) => {
    output[view] = views[view];
    return output;
  }, {});

export default connect(state => ({
  views: getViews(state),
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
  toggleContentView: (name) => {
    dispatch(toggleContentView(name));
  },
  onRemove: (id) => {
    dispatch(remove(id));
  },
}))(Component);
