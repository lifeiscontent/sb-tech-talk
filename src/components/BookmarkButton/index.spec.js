import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Example } from "./index.stories";

let onBookmark;
let canBookmark;

describe("BookmarkButton", () => {
  beforeEach(() => {
    canBookmark = { value: false };
    onBookmark = jest.fn();
  });

  it("is disabled", async () => {
    render(
      <Example canBookmark={canBookmark} onBookmark={onBookmark}>
        Button
      </Example>
    );

    const button = await screen.findByRole("button");

    expect(button).toBeDisabled();
  });

  it("does not call onBookmark", async () => {
    render(
      <Example canBookmark={canBookmark} onBookmark={onBookmark}>
        Button
      </Example>
    );

    const button = await screen.findByRole("button");

    fireEvent.click(button);

    expect(onBookmark).not.toHaveBeenCalled();
  });

  describe("with permissions", () => {
    beforeEach(() => {
      canBookmark = { value: true };
    });

    it("is not disabled", async () => {
      render(
        <Example canBookmark={canBookmark} onBookmark={onBookmark}>
          Button
        </Example>
      );

      const button = await screen.findByRole("button");

      expect(button).not.toBeDisabled();
    });

    it("calls onBookmark", async () => {
      render(
        <Example canBookmark={canBookmark} onBookmark={onBookmark}>
          Button
        </Example>
      );

      const button = await screen.findByRole("button");

      fireEvent.click(button);

      expect(onBookmark).toHaveBeenCalled();
    });
  });
});
