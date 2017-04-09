import { connect } from 'react-redux';
import Component from './component.jsx';

export default connect(state => ({
  selectedId: state.documents.selected.id,
}), () => ({
}))(Component);
