import React from 'react';
import {
  UICarousel,
  UICarouselFrame,
  UICarouselFrameList,
  UICarouselFrameListItem,
  UICarouselPagination,
  UICarouselPaginationAction,
  UICarouselPaginationStatus,
  UICarouselPaginationStatusCue,
} from '.';

export default {
  title: 'UI/Carousel',
  component: UICarousel,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
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

export function Example({
  onClickNextPage,
  onClickPreviousPage,
  selectedIndex,
}) {
  return (
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
        <UICarouselPaginationAction
          disabled={selectedIndex === 0}
          onClick={onClickPreviousPage}
        >
          &larr;
        </UICarouselPaginationAction>
        <UICarouselPaginationStatus>
          {Array.from({ length: 3 }).map((_, i) => (
            <UICarouselPaginationStatusCue active={selectedIndex === i} />
          ))}
        </UICarouselPaginationStatus>
        <UICarouselPaginationAction
          disabled={selectedIndex === 2}
          onClick={onClickNextPage}
        >
          &rarr;
        </UICarouselPaginationAction>
      </UICarouselPagination>
    </UICarousel>
  );
}

Example.story = {
  argTypes: {
    selectedIndex: {
      defaultValue: 0,
      control: { type: 'number', min: 0, max: 2 },
    },
  },
};
