import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  UICarousel,
  UICarouselFrame,
  UICarouselFrameList,
  UICarouselPagination,
  UICarouselPaginationAction,
  UICarouselPaginationStatus,
  UICarouselPaginationStatusCue,
} from '../../ui';

function calculateTotalPages(node) {
  return Math.max(1, Math.ceil(node.scrollWidth / node.offsetWidth));
}

function calculatePageIndex(node) {
  const totalPages = calculateTotalPages(node);
  const pageWidth = node.scrollWidth / totalPages;

  if (node.scrollLeft < pageWidth) return 0;

  return Math.round(node.scrollLeft / pageWidth);
}

function calculateDisabledState(node, direction) {
  if (direction === -1) {
    return node.scrollLeft === 0;
  } else if (direction === 1) {
    return node.scrollLeft === node.scrollWidth - node.offsetWidth;
  }
}

export function Carousel(props) {
  const listRef = useRef(null);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (listRef.current) {
        const nextTotalPages = calculateTotalPages(listRef.current);
        const nextActivePageIndex = calculatePageIndex(listRef.current);
        const nextLeftButtonDisabled = calculateDisabledState(
          listRef.current,
          -1
        );
        const nextRightButtonDisabled = calculateDisabledState(
          listRef.current,
          1
        );

        if (nextTotalPages !== totalPages) {
          setTotalPages(nextTotalPages);
        }

        if (nextActivePageIndex !== activePageIndex) {
          setActivePageIndex(nextActivePageIndex);
        }

        if (nextLeftButtonDisabled !== leftButtonDisabled) {
          setLeftButtonDisabled(nextLeftButtonDisabled);
        }

        if (nextRightButtonDisabled !== rightButtonDisabled) {
          setRightButtonDisabled(nextRightButtonDisabled);
        }
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activePageIndex, leftButtonDisabled, rightButtonDisabled, totalPages]);

  function handleScroll(event) {
    const nextActivePageIndex = calculatePageIndex(event.currentTarget);
    const nextLeftButtonDisabled = calculateDisabledState(
      event.currentTarget,
      -1
    );
    const nextRightButtonDisabled = calculateDisabledState(
      event.currentTarget,
      1
    );

    if (nextActivePageIndex !== activePageIndex) {
      setActivePageIndex(nextActivePageIndex);
    }

    if (nextLeftButtonDisabled !== leftButtonDisabled) {
      setLeftButtonDisabled(nextLeftButtonDisabled);
    }

    if (nextRightButtonDisabled !== rightButtonDisabled) {
      setRightButtonDisabled(nextRightButtonDisabled);
    }
  }

  function handlePreviousClick(event) {
    if (listRef.current) {
      event.preventDefault();
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft - listRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }

  function handleNextClick(event) {
    if (listRef.current) {
      event.preventDefault();
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft + listRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }

  return (
    <UICarousel>
      <UICarouselFrame>
        <UICarouselFrameList listRef={listRef} onScroll={handleScroll}>
          {props.children}
        </UICarouselFrameList>
      </UICarouselFrame>
      <UICarouselPagination>
        <UICarouselPaginationAction
          disabled={leftButtonDisabled}
          onClick={handlePreviousClick}
        >
          &larr;
        </UICarouselPaginationAction>
        <UICarouselPaginationStatus>
          {Array.from({ length: totalPages }).map((_, i) => (
            <UICarouselPaginationStatusCue
              key={i}
              active={activePageIndex === i}
            />
          ))}
        </UICarouselPaginationStatus>
        <UICarouselPaginationAction
          disabled={rightButtonDisabled}
          onClick={handleNextClick}
        >
          &rarr;
        </UICarouselPaginationAction>
      </UICarouselPagination>
    </UICarousel>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};
