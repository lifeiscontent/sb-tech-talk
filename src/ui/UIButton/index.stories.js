import React from "react";
import { UIButton } from ".";

export default {
  title: "UI/Button",
  component: UIButton,
};

export const Renders = ({ children, onClick, variant, disabled }) => (
  <UIButton onClick={onClick} variant={variant} disabled={disabled}>
    {children}
  </UIButton>
);

Renders.story = {
  argTypes: {
    children: {
      defaultValue: "Button",
    },
    variant: {
      defaultValue: "primary",
    },
  },
};
