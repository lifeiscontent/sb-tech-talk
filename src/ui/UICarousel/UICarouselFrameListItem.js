import React from "react";
import PropTypes from "prop-types";
import styles from "./UICarouselFrameListItem.module.css";

export function UICarouselFrameListItem(props) {
  return (
    <li
      className={styles.UICarouselFrameListItem}
      data-cy="UICarouselFrameListItem"
    >
      {props.children}
    </li>
  );
}

UICarouselFrameListItem.propTypes = {
  children: PropTypes.node.isRequired,
};
