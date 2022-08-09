import { useContext, useEffect } from "react";

import { SLIDER_DATA } from "./slider-data";
import { SlideContext } from "../../context/slide-context";

import SliderDots from "../slider-dots/slider-dots.component";

import ArrowSlider from "../arrow-slider/arrow-slider.component";

import "./slider.styles.scss";

const Slider = () => {
  const { nextSlide, prevSlide, slideClass } = useContext(SlideContext);

  useEffect(() => {
    let timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  });

  return (
    <div className="slider-container">
      {SLIDER_DATA.map((slideObj, index) => {
        const addSlideClass = slideClass(index);
        return (
          <div key={slideObj.id} className={addSlideClass}>
            <img alt="slideImage" src={slideObj.imageUrl} />
          </div>
        );
      })}
      <ArrowSlider moveSlide={nextSlide} direction="next" />
      <ArrowSlider moveSlide={prevSlide} direction="prev" />

      <SliderDots />
    </div>
  );
};

export default Slider;
