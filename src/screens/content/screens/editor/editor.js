import { connect } from 'react-redux';
import { setFields } from 'actions/documents';
import Component from './component.jsx';

export default connect(state => ({
  document: state.documents.selected,
}), dispatch => ({
  onBodyChanged: (body) => {
    dispatch(setFields({
      body,
    }));
  },
}))(Component);
