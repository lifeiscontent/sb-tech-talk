import React from 'react';
import { Icon } from '..';
import { BookmarkButton } from '.';

export default {
  title: 'Components/BookmarkButton',
  component: BookmarkButton,
};

export function Example({ bookmarked, onBookmark, canBookmark }) {
  return (
    <BookmarkButton
      bookmarked={bookmarked}
      onBookmark={onBookmark}
      canBookmark={canBookmark}
    >
      <Icon name={bookmarked ? 's-bookmark-minus' : 'r-bookmark-plus'} />
      &nbsp;
      {bookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
    </BookmarkButton>
  );
}

Example.story = {
  argTypes: {
    canBookmark: {
      defaultValue: { value: false },
      control: {
        type: 'options',
        options: { true: { value: true }, false: { value: false } },
      },
    },
  },
};
