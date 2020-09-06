import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

import img01 from "../images/landing_image01.jpg";
import img02 from "../images/landing_image02.jpg";
import img03 from "../images/landing_image03.jpg";

import "./styles/LandingSection.css";

const LandingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = [img01, img02, img03];
  
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item,index) => {
    return (
      <CarouselItem
        className ="landingSection-carouselItem"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img src={item} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="landingSection-mainContainer">
      <Carousel className="landingSection-carousel" activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
};
export default LandingSection;
