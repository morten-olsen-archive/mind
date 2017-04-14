import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentPropType from 'prop-types/document';
import MonacoEditor from 'react-monaco-editor';

export class Editor extends Component {
  static get propTypes() {
    return {
      language: PropTypes.string,
      options: PropTypes.shape({
        selectOnLineNumbers: PropTypes.bool,
      }),
      onBodyChanged: PropTypes.func.isRequired,
      document: DocumentPropType.isRequired,
    };
  }

  static get defaultProps() {
    return {
      language: 'markdown',
      options: {
        selectOnLineNumbers: true,
        wrappingColumn: 0,
        wrappingIndent: 'indent',
        fontFamily: 'Fira Code',
        fontLigatures: true,
      },
    };
  }

  componentWillUnmount() {
    if (this.resizeHandler) {
      global.removeEventListener('resize', this.resizeHandler);
    }
  }

  setEditor(editor) {
    editor.getModel().updateOptions({
      tabSize: 2,
    });

    this.resizeHandler = (() => {
      editor.layout();
    });

    global.window.addEventListener('resize', this.resizeHandler);
  }

  render() {
    const {
      language,
      options,
      onBodyChanged,
      document,
    } = this.props;

    return (
      <MonacoEditor
        width="100%"
        height="100%"
        theme="vs-dark"
        editorDidMount={this.setEditor.bind(this)}
        onChange={onBodyChanged}
        value={document.body || ''}
        language={language}
        options={options}
      />
    );
  }
}

export default Editor;
