import React from "react";
import PropTypes from "prop-types";
import {
  UICarousel,
  UICarouselFrame,
  UICarouselFrameList,
  UICarouselPagination,
  UICarouselPaginationAction,
  UICarouselPaginationStatus,
  UICarouselPaginationStatusCue,
} from "../../ui";

function calculateTotalPages(node) {
  return Math.max(1, Math.ceil(node.scrollWidth / node.offsetWidth));
}

function calculateSelectedIndex(node, total) {
  return Math.max(
    0,
    Math.min(
      Math.round(
        total * (node.scrollLeft / (node.scrollWidth - node.offsetWidth))
      ),
      total
    )
  );
}

export function Carousel(props) {
  const total = React.Children.toArray(props.children).length;
  const listRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(1);
  const pageIndex = Math.round((totalPages - 1) * (selectedIndex / total));

  React.useEffect(() => {
    function handleResize() {
      if (listRef.current) {
        const nextTotalPages = calculateTotalPages(listRef.current);
        const nextSelectedIndex = calculateSelectedIndex(
          listRef.current,
          total
        );
        if (totalPages !== nextTotalPages) {
          setTotalPages(nextTotalPages);
        }
        if (selectedIndex !== nextSelectedIndex) {
          setSelectedIndex(nextSelectedIndex);
        }
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedIndex, total, totalPages]);

  function handleScroll(event) {
    const nextSelectedIndex = calculateSelectedIndex(
      event.currentTarget,
      total
    );

    if (selectedIndex !== nextSelectedIndex) {
      setSelectedIndex(nextSelectedIndex);
    }
  }

  function handlePreviousClick(event) {
    if (listRef.current) {
      event.preventDefault();
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft - listRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }

  function handleNextClick(event) {
    if (listRef.current) {
      event.preventDefault();
      listRef.current.scrollTo({
        left: listRef.current.scrollLeft + listRef.current.offsetWidth,
        behavior: "smooth",
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
          disabled={selectedIndex === 0}
          onClick={handlePreviousClick}
        >
          &larr;
        </UICarouselPaginationAction>
        <UICarouselPaginationStatus>
          {Array.from({ length: totalPages }).map((_, i) => (
            <UICarouselPaginationStatusCue key={i} active={pageIndex === i} />
          ))}
        </UICarouselPaginationStatus>
        <UICarouselPaginationAction
          disabled={selectedIndex === total}
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
