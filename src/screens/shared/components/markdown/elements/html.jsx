import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ text: source, tag: Tag = 'div' }) => (
  <Tag dangerouslySetInnerHTML={{ __html: source }} />
);

Html.propTypes = {
  text: PropTypes.string,
  tag: PropTypes.string,
};

Html.defaultProps = {
  tag: 'div',
  text: '',
};

export default Html;
