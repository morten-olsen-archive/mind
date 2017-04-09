import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import run from 'utils/script';
import Html from './html';

const renderOutput = ({ source, settings, exports }) => { // eslint-disable-line
  if (!settings.includes('play')) return '';
  try {
    const module = {
      exports: null,
    };

    run(source, exports, module);

    if (settings.includes('no output')) return '';

    return Promise.resolve(module.exports).then((output) => {
      if (output instanceof global.HTMLCanvasElement) {
        return (
          <img src={output.toDataURL()} alt="generated" />
        );
      } else if (output instanceof global.HTMLElement) {
        return <Html source={output.outerHTML} />;
      } else if (React.isValidElement(output)) {
        return output;
      } else {
        return <Html source={JSON.stringify(output, null, '  ')} />;
      }
    });
  } catch (err) {
    return <Html source={err.toString()} />;
  }
};

class Output extends Component {
  constructor() {
    super();
    this.state = {
      output: null,
    };
  }

  componentDidMount() {
    this.update(this.props);
  }

  componentWillReceiveProps(next) {
    this.update(next);
  }

  shouldComponentUpdate() {
    return false;
  }

  update(next) {
    Promise.resolve(renderOutput(next)).then((output) => {
      const node = ReactDOM.findDOMNode(this);
      /* if (!this.root) {
        this.root = node.createShadowRoot();
      }*/
      ReactDOM.render(
        output,
        node,
      );
    });
  }

  render() {
    return <div />;
  }
}

export default Output;
