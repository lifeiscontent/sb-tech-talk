import React from "react";
import { UIButton } from ".";

export default {
  title: "UI/Button",
  component: UIButton,
};

export function Example({ children, onClick, variant, disabled }) {
  return (
    <UIButton onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </UIButton>
  );
}

Example.story = {
  argTypes: {
    children: {
      defaultValue: "Button",
    },
    variant: {
      defaultValue: "primary",
    },
  },
};
