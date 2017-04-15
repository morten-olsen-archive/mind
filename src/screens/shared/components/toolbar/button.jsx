import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Glyph from 'components/glyph';
import styles from './button.css';

const Button = ({ icon, children, type, onClick, className, selected }) => (
  <div
    onClick={onClick}
    className={classnames(styles.button, {
      [styles[type]]: !!type,
      [styles.inactive]: !onClick,
      [styles.selected]: selected,
      [className]: !!className,
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
  selected: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(['positive', 'negative', 'neutral']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  icon: undefined,
  selected: false,
  children: undefined,
  type: undefined,
  onClick: undefined,
  className: undefined,
};

export default Button;
