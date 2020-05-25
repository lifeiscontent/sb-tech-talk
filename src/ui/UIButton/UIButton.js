import React from 'react';
import PropTypes from 'prop-types';
import styles from './UIButton.module.css';
import clsx from 'clsx';

export function UIButton(props) {
  return (
    <button
      aria-pressed={props.pressed}
      className={clsx(styles.UIButton, {
        [styles['UIButton--disabled']]: props.disabled,
        [styles['UIButton--pressed']]: props.pressed,
        [styles['UIButton--shape-rounded']]: props.shape === 'rounded',
        [styles['UIButton--variant-primary']]: props.variant === 'primary',
        [styles['UIButton--variant-secondary']]: props.variant === 'secondary',
      })}
      data-cy="UIButton"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

UIButton.defaultProps = {
  shape: 'regular',
};

UIButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  pressed: PropTypes.bool,
  shape: PropTypes.oneOf(['regular', 'rounded']).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};
