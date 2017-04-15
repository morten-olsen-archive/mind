import { Lexer } from 'marked';
import builder from './builder';

const defaultOptions = {
  gfm: true,
  tables: true,
};

const Markdown = ({ source, exports = {}, options = defaultOptions, elements }) => {
  const lexer = new Lexer(options);
  const tokens = lexer.lex(source);
  return builder(elements, tokens, exports);
};

export default Markdown;
