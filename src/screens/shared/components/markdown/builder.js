import React from 'react';
import Header from './elements/header.jsx';
import Paragraph from './elements/paragraph.jsx';
import List from './elements/list.jsx';
import ListItem from './elements/list-item.jsx';
import Text from './elements/text.jsx';
import Code from './elements/code.jsx';
import Html from './elements/html.jsx';

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
          exports: elms[type] ? exp : undefined,
        },
      ));
    }
  }

  return React.createElement(
    elm,
    {
      ...inputToken,
      exports: elm === 'div' ? undefined : exp,
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
