import React from 'react';

export default ({ text: source, tag : Tag = 'div' }) => (
  <Tag dangerouslySetInnerHTML={{ __html: source }} />
);
