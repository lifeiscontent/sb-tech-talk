import React from 'react';
import PropTypes from 'prop-types';
import { UIButton } from '../../ui';

export function BookmarkButton(props) {
  return (
    <UIButton
      disabled={props.canBookmark.value === false}
      onClick={props.onBookmark}
      pressed={props.bookmarked}
      variant="primary"
    >
      {props.children}
    </UIButton>
  );
}

BookmarkButton.defaultProps = {
  canBookmark: {
    value: false,
  },
};

BookmarkButton.propTypes = {
  bookmarked: PropTypes.bool,
  canBookmark: PropTypes.shape({ value: PropTypes.bool.isRequired }).isRequired,
  children: PropTypes.node.isRequired,
  onBookmark: PropTypes.func,
};
