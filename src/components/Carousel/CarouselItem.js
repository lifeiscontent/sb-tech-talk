import React from 'react';
import PropTypes from 'prop-types';
import { UICarouselFrameListItem } from '../../ui';

export function CarouselItem(props) {
  return <UICarouselFrameListItem>{props.children}</UICarouselFrameListItem>;
}

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
};
