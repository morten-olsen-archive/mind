import React from 'react';
import Header from './elements/header.js';
import Paragraph from './elements/paragraph.js';
import List from './elements/list.js';
import ListItem from './elements/list-item.js';
import Text from './elements/text.js';
import Code from './elements/code.js';
import Html from './elements/html.js';

const elements = {
  heading: Header,
  paragraph: Paragraph,
  list: List,
  list_item: ListItem,
  text: Text,
  code: Code,
  html: Html,
};

const buildBranch = (elms, tokens, name, inputToken = {}, exp = {}) => {
  const items = [];
  const elm = elms[name] || 'div';

  while (tokens.length > 0) {
    const token = tokens.shift();
    if (!token) continue;
    const type = token.type;

    if (type.slice(-6) === '_start') {
      const elmName = type.substring(0, type.length - 6);
      items.push(buildBranch(elms, tokens, elmName, exp));
    } else if (name && type === `${name}_end`) {
      break;
    } else {
      items.push(React.createElement(
        elms[type] || 'div',
        {
          ...token,
          exports: exp,
        },
      ));
    }
  }

  return React.createElement(
    elm,
    {
      ...inputToken,
      exports: exp,
    },
    ...items,
  );
};

export default (elms, tokens, exp) => {
  elms = {
    ...elements,
    ...elms,
  };
  return buildBranch(elms, tokens, undefined, exp);
};
