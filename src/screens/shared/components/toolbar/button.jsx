import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Glyph from 'components/glyph';
import styles from './button.css';

const Button = ({ icon, children, type, onClick }) => (
  <div
    onClick={onClick}
    className={classnames(styles.button, {
      [styles[type]]: !!type,
    })}
  >
    {icon && (
      <Glyph name={icon} className={styles.icon} />
    )}
    {children}
  </div>
);

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['positive', 'negative', 'neutral']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: undefined,
  children: undefined,
  type: undefined,
  onClick: undefined,
};

export default Button;
