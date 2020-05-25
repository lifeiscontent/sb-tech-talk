import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Example } from './index.stories';

describe('BookmarkButton', () => {
  let bookmarked;
  let canBookmark;
  let onBookmark;

  beforeEach(() => {
    bookmarked = false;
    canBookmark = { value: false };
    onBookmark = jest.fn();
  });

  it('is not pressed', async () => {
    render(
      <Example
        bookmarked={bookmarked}
        canBookmark={canBookmark}
        onBookmark={onBookmark}
      />
    );

    const button = await screen.findByRole('button');

    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('is disabled', async () => {
    render(
      <Example
        bookmarked={bookmarked}
        canBookmark={canBookmark}
        onBookmark={onBookmark}
      />
    );

    const button = await screen.findByRole('button');

    expect(button).toBeDisabled();
  });

  it('does not call onBookmark when clicked', async () => {
    render(
      <Example
        bookmarked={bookmarked}
        canBookmark={canBookmark}
        onBookmark={onBookmark}
      />
    );

    const button = await screen.findByRole('button');

    fireEvent.click(button);

    expect(onBookmark).not.toHaveBeenCalled();
  });

  describe('with permissions', () => {
    beforeEach(() => {
      canBookmark = { value: true };
    });

    it('is not disabled', async () => {
      render(
        <Example
          bookmarked={bookmarked}
          canBookmark={canBookmark}
          onBookmark={onBookmark}
        />
      );

      const button = await screen.findByRole('button');

      expect(button).not.toBeDisabled();
    });

    it('calls onBookmark when clicked', async () => {
      render(
        <Example
          bookmarked={bookmarked}
          canBookmark={canBookmark}
          onBookmark={onBookmark}
        />
      );

      const button = await screen.findByRole('button');

      fireEvent.click(button);

      expect(onBookmark).toHaveBeenCalled();
    });
  });

  describe('when bookmarked', () => {
    beforeEach(() => {
      bookmarked = true;
    });

    it('is pressed', async () => {
      render(
        <Example
          bookmarked={bookmarked}
          canBookmark={canBookmark}
          onBookmark={onBookmark}
        />
      );

      const button = await screen.findByRole('button');

      expect(button).toHaveAttribute('aria-pressed', 'true');
    });
  });
});
