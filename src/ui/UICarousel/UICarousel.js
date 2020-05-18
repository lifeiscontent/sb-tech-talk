import React from "react";
import PropTypes from "prop-types";
import styles from "./UICarousel.module.css";

export function UICarousel(props) {
  return (
    <div className={styles.UICarousel} data-cy="UICarousel">
      {props.children}
    </div>
  );
}

UICarousel.propTypes = {
  children: PropTypes.node.isRequired,
};
