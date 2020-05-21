import React from "react";
import PropTypes from "prop-types";
import styles from "./UIButton.module.css";
import clsx from "clsx";

/**
 * @param {{ disabled: boolean; variant: string; onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; children: React.ReactNode; }} props
 */
export function UIButton(props) {
  return (
    <button
      className={clsx(styles.UIButton, {
        [styles["UIButton--disabled"]]: props.disabled,
        [styles["UIButton--variant-primary"]]: props.variant === "primary",
      })}
      disabled={props.disabled}
      data-cy="UIButton"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

UIButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary"]).isRequired,
};
