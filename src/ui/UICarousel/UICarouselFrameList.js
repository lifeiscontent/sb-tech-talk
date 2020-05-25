import React from 'react';
import PropTypes from 'prop-types';
import styles from './UICarouselFrameList.module.css';

export function UICarouselFrameList(props) {
  return (
    <ul
      className={styles.UICarouselFrameList}
      data-cy="UICarouselFrameList"
      onScroll={props.onScroll}
      ref={props.listRef}
    >
      {props.children}
    </ul>
  );
}

UICarouselFrameList.propTypes = {
  children: PropTypes.node.isRequired,
  onScroll: PropTypes.func,
  listRef: PropTypes.object,
};
