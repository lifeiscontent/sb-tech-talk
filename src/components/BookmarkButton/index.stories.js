import React from "react";
import { BookmarkButton } from ".";

export default {
  title: "Components/BookmarkButton",
  component: BookmarkButton,
};

export function Example({ children, onBookmark, canBookmark }) {
  return (
    <BookmarkButton onBookmark={onBookmark} canBookmark={canBookmark}>
      {children}
    </BookmarkButton>
  );
}

Example.story = {
  argTypes: {
    children: {
      defaultValue: "Bookmark",
    },
    canBookmark: {
      defaultValue: { value: false },
      control: {
        type: "options",
        options: { true: { value: true }, false: { value: false } },
      },
    },
  },
};
