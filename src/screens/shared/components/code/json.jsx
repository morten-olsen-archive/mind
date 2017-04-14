import React from 'react';

export default ({ data, children }) => (
  <div>{JSON.stringify(data || children, null, '  ')}</div>
);
