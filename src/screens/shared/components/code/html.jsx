import React from 'react';

export default ({ source, tag: Tag = 'div' }) => (
  <Tag dangerouslySetInnerHTML={{ __html: source }} />
);
