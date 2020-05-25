import React from 'react';
import PropTypes from 'prop-types';
import styles from './UICarouselPaginationStatusCue.module.css';
import clsx from 'clsx';

export function UICarouselPaginationStatusCue(props) {
  return (
    <span
      className={clsx(styles.UICarouselPaginationStatusCue, {
        [styles['UICarouselPaginationStatusCue--active']]: props.active,
        [styles['UICarouselPaginationStatusCue--inactive']]: !props.active,
      })}
      data-active={props.active}
      data-cy="UICarouselPaginationStatusCue"
    />
  );
}

UICarouselPaginationStatusCue.propTypes = {
  active: PropTypes.bool,
};
