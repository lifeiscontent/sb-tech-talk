import React from "react";
import {
  UICarousel,
  UICarouselFrame,
  UICarouselFrameList,
  UICarouselFrameListItem,
  UICarouselPagination,
  UICarouselPaginationAction,
  UICarouselPaginationStatus,
  UICarouselPaginationStatusCue,
} from ".";

export default {
  title: "UI/Carousel",
  component: UICarousel,
  parameters: {
    layout: 'fullscreen'
  },
  subcomponents: {
    UICarouselFrame,
    UICarouselFrameList,
    UICarouselFrameListItem,
    UICarouselPagination,
    UICarouselPaginationAction,
    UICarouselPaginationStatus,
    UICarouselPaginationStatusCue,
  },
};

export const Renders = ({ selectedIndex }) => (
  <UICarousel>
    <UICarouselFrame>
      <UICarouselFrameList>
        {Array.from({ length: 16 }).map((_, i) => (
          <UICarouselFrameListItem key={i}>
            <img src="logo192.png" alt="Example" />
          </UICarouselFrameListItem>
        ))}
      </UICarouselFrameList>
    </UICarouselFrame>
    <UICarouselPagination>
      <UICarouselPaginationAction disabled={selectedIndex === 0}>&larr;</UICarouselPaginationAction>
      <UICarouselPaginationStatus>
        {Array.from({ length: 3 }).map((_, i) => (
          <UICarouselPaginationStatusCue active={selectedIndex === i} />
        ))}
      </UICarouselPaginationStatus>
      <UICarouselPaginationAction disabled={selectedIndex === 2}>&rarr;</UICarouselPaginationAction>
    </UICarouselPagination>
  </UICarousel>
);

Renders.story = {
  argTypes: {
    selectedIndex: {
      defaultValue: 0,
      control: { type: "number", min: 0, max: 2 },
    },
  },
};
