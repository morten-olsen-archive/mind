import React from 'react';

const Html = ({ source, tag: Tag = 'div' }) => (
  <Tag dangerouslySetInnerHTML={{ __html: source }} />
);

export default Html;
