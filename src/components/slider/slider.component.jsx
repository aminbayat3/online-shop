import { useContext, useEffect, useRef } from "react";

import { SLIDER_DATA } from "./slider-data";
import { SlideContext } from "../../context/slide-context";

import ArrowSlider from "../arrow-slider/arrow-slider.component";

import './slider.styles.scss';

const Slider = () => {
  const { slideIndex, nextSlide, prevSlide, moveDot } = useContext(SlideContext);
  const prevSlideIndex = useRef(1);

  useEffect(() => {
    prevSlideIndex.current = slideIndex;
}, [slideIndex]);


  return (
    <div className="slider-container">
      {SLIDER_DATA.map((slideObj, index) => {
        const slideClass = () => {
            if(slideIndex === index + 1) {
                if(slideIndex >= prevSlideIndex.current) {
                    return 'slide slide-active1';
                }else {
                    return 'slide slide-active2';
                }
            } else {
                return 'slide';
            }
        }
        let class1 = slideClass();
        return (
          <div
            key={slideObj.id}
            className={class1}
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
    </div>
  );
};

export default Slider;
