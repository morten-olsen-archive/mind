import React from 'react';

export default ({ text, depth }) => {
  const Tag = `h${depth}`;
  return (
    <Tag>{text}</Tag>
  );
};
