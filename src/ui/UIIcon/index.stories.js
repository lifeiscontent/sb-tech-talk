import React from "react";
import { UIIcon } from ".";

export default {
  title: "UI/Icon",
  component: UIIcon,
};

export function Example({
  name,
  size
}) {
  return (
    <UIIcon name={name} size={size} />
  );
}

Example.story = {
  args: {
    name: "r-bookmark-plus",
  },
};