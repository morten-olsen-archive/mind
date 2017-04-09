import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './panel.css';

const Panel = ({
  children,
  className,
  horizontal,
  fill,
  width,
  height,
  theme,
  padding,
  onClick,
  scroll,
}) => (
  <div
    onClick={onClick}
    className={classnames(styles.panel, {
      [styles.horizontal]: horizontal,
      [styles.fill]: fill,
      [styles.scroll]: scroll,
      [styles[theme]]: theme,
      [className]: !!className,
    })}

    style={{
      width,
      height,
      padding,
    }}
  >
    {children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  fill: PropTypes.bool,
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  theme: PropTypes.oneOf([
    'light',
    'dark',
  ]),
};

Panel.defaultProps = {
  children: undefined,
  className: undefined,
  horizontal: false,
  fill: false,
  padding: undefined,
  width: undefined,
  height: undefined,
  theme: undefined,
};

export default Panel;
