import React from "react";
import { BookmarkButton } from ".";

export default {
  title: "Components/BookmarkButton",
  component: BookmarkButton,
};

export const Renders = ({ children, onBookmark, canBookmark }) => (
  <BookmarkButton onBookmark={onBookmark} canBookmark={canBookmark}>
    {children}
  </BookmarkButton>
);

Renders.story = {
  argTypes: {
    children: {
      defaultValue: "Bookmark",
    },
    canBookmark: {
      defaultValue: { value: false },
      control: {
        type: "options",
        options: { 'true': { value: true }, 'false': { value: false } },
      },
    },
  },
};
