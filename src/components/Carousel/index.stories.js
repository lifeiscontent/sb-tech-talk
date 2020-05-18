import React from "react";
import { Carousel, CarouselItem } from ".";

export default {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: 'fullscreen'
  },
  subcomponents: {
    CarouselItem,
  },
};

export const Renders = () => (
  <Carousel>
    {Array.from({ length: 16 }).map((_, i) => (
      <CarouselItem key={i}>
        <img src="logo192.png" alt="Example" />
      </CarouselItem>
    ))}
  </Carousel>
);
