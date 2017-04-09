import { connect } from 'react-redux';
import Component from './component.jsx';

export default connect(state => ({
  document: state.documents.selected,
}), () => ({

}))(Component);
