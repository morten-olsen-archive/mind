import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/panel';

const Toolbar = ({
  children,
  theme,
  className,
}) => (
  <Panel horizontal theme={theme} className={className} padding={10}>
    {children}
  </Panel>
);

Toolbar.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  className: PropTypes.string,
};

Toolbar.defaultProps = {
  children: undefined,
  theme: 'dark',
  className: undefined,
};

export default Toolbar;
