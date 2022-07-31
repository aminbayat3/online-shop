import { useContext, useEffect, useRef } from "react";

import { SLIDER_DATA } from "./slider-data";
import { SlideContext } from "../../context/slide-context";

import ArrowSlider from "../arrow-slider/arrow-slider.component";

import './slider.styles.scss';

const Slider = () => {
  const { slideIndex, nextSlide, prevSlide, moveDot } = useContext(SlideContext);
  const prevSlideIndex = useRef();

  useEffect(() => {
    prevSlideIndex.current = slideIndex;
}, [slideIndex]);

  return (
    <div className="slider-container">
      {SLIDER_DATA.map((slideObj, index) => {
        return (
          <div
            key={slideObj.id}
            className={`${
              slideIndex === index + 1 ? "slide-active" : ""
            } slide`}
          >
            <img alt='slideImage' src={slideObj.imageUrl} />
          </div>
        );
      })}
      <ArrowSlider moveSlide={nextSlide} direction="next" />
      <ArrowSlider moveSlide={prevSlide} direction="prev" />

      <div className="dots-container">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => moveDot(idx + 1)}
            className={`${slideIndex === idx + 1 ? "dot-active" : ""} dot`}
          ></div>
        ))}
      </div>
      <p className="p"> Now: {slideIndex} Before: {prevSlideIndex.current}</p>
    </div>
  );
};

export default Slider;
