import React from 'react';
import PropTypes from 'prop-types';
import styles from './UICarouselPagination.module.css';

export function UICarouselPagination(props) {
  return (
    <div className={styles.UICarouselPagination} data-cy="UICarouselPagination">
      {props.children}
    </div>
  );
}

UICarouselPagination.propTypes = {
  children: PropTypes.node.isRequired,
};
