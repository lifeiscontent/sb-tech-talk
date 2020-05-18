import React from "react";
import PropTypes from "prop-types";
import styles from "./UICarouselPaginationStatus.module.css";

export function UICarouselPaginationStatus(props) {
  return (
    <div
      className={styles.UICarouselPaginationStatus}
      data-cy="UICarouselPaginationStatus"
    >
      {props.children}
    </div>
  );
}

UICarouselPaginationStatus.propTypes = {
  children: PropTypes.node.isRequired,
};
