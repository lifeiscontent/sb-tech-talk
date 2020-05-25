import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as RBookmarkPlus } from './r-bookmark-plus.svg';
import { ReactComponent as SBookmarkMinus } from './s-bookmark-minus.svg';
import styles from './UIIcon.module.css';

export function UIIcon(props) {
  switch (props.name) {
    case 'r-bookmark-plus':
      return (
        <RBookmarkPlus
          className={styles.UIIcon}
          data-cy="UIIcon"
          style={{ fontSize: props.size }}
        />
      );
    case 's-bookmark-minus':
      return (
        <SBookmarkMinus
          className={styles.UIIcon}
          data-cy="UIIcon"
          style={{ fontSize: props.size }}
        />
      );
    default:
      return null;
  }
}

UIIcon.propTypes = {
  size: PropTypes.string,
  name: PropTypes.oneOf(['r-bookmark-plus', 's-bookmark-minus']).isRequired,
};
