import React from 'react';
import PropTypes from 'prop-types';
import styles from './UICarouselFrame.module.css';

export function UICarouselFrame(props) {
  return (
    <div className={styles.UICarouselFrame} data-cy="UICarouselFrame">
      {props.children}
    </div>
  );
}

UICarouselFrame.propTypes = {
  children: PropTypes.node.isRequired,
};
