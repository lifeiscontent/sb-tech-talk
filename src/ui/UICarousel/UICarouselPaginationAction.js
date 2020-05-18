import React from "react";
import PropTypes from "prop-types";
import styles from "./UICarouselPaginationAction.module.css";
import clsx from "clsx";

export function UICarouselPaginationAction(props) {
  return (
    <button
      className={clsx(styles.UICarouselPaginationAction, {
        [styles["UICarouselPaginationAction--disabled"]]: props.disabled,
      })}
      disabled={props.disabled}
      onClick={props.onClick}
      data-cy="UICarouselPaginationAction"
    >
      {props.children}
    </button>
  );
}

UICarouselPaginationAction.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
