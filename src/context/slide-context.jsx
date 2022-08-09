import { createContext, useState, useEffect, useRef } from "react";
import { SLIDER_DATA } from "../components/slider/slider-data";

export const SlideContext = createContext({
  slideIndex: 1,
  nextSlide: () => {},
  prevSlide: () => {},
  moveDot: () => {},
  slideClass: () => {},
});

const moveToNextSlide = (slideIndex) => {
  if (slideIndex !== SLIDER_DATA.length) {
    return slideIndex + 1;
  } else {
    return 1;
  }
};

const moveToPrevSlide = (slideIndex) => {
  if (slideIndex !== 1) {
    return slideIndex - 1;
  } else {
    return SLIDER_DATA.length;
  }
};

export const SlideProvider = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [isDotsClicked, setIsDotsClicked] = useState(false);
  const prevSlideIndex = useRef(1);
  useEffect(() => {
    prevSlideIndex.current = slideIndex;
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex(moveToNextSlide(slideIndex));
    setIsDotsClicked(false);
  };

  const prevSlide = () => {
    setSlideIndex(moveToPrevSlide(slideIndex));
    setIsDotsClicked(false);
  };

  const slideClass = (index) => {
    switch (slideIndex) {
      case index + 1:
        if (isDotsClicked) {
          if (slideIndex > prevSlideIndex.current) {
            return "slide slide-active1";
          } else {
            return "slide slide-active2";
          }
        } else {
          if (
            slideIndex >= prevSlideIndex.current ||
            (slideIndex === 1 && prevSlideIndex.current === SLIDER_DATA.length)
          ) {
            if (
              slideIndex === SLIDER_DATA.length &&
              prevSlideIndex.current === 1
            ) {
              return "slide slide-active2";
            } else {
              return "slide slide-active1";
            }
          } else {
            return "slide slide-active2";
          }
        }

      default:
        return "slide";
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
    setIsDotsClicked(true);
  };

  const value = {
    slideIndex,
    nextSlide,
    prevSlide,
    moveDot,
    slideClass,
  };

  return (
    <SlideContext.Provider value={value}>{children}</SlideContext.Provider>
  );
};
