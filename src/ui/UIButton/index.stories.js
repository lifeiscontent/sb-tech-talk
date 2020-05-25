import React from 'react';
import { UIButton } from '.';

export default {
  title: 'UI/Button',
  component: UIButton,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export function Example({
  children,
  disabled,
  onClick,
  pressed,
  shape,
  variant,
}) {
  return (
    <UIButton
      disabled={disabled}
      onClick={onClick}
      pressed={pressed}
      shape={shape}
      variant={variant}
    >
      {children}
    </UIButton>
  );
}

Example.story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};
