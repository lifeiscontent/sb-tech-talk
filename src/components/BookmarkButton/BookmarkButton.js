import React from "react";
import PropTypes from "prop-types";
import { UIButton } from "../../ui";

/**
 * @param {{ canBookmark: { value: boolean; }; onBookmark: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; children: React.ReactNode; }} props
 */
export function BookmarkButton(props) {
  return (
    <UIButton
      disabled={props.canBookmark.value === false}
      onClick={props.onBookmark}
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
  canBookmark: PropTypes.shape({ value: PropTypes.bool.isRequired }).isRequired,
  children: PropTypes.node.isRequired,
  onBookmark: PropTypes.func,
};
