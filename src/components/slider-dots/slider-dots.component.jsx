import { useContext } from 'react';

import { SLIDER_DATA } from '../slider/slider-data';
import { PRODUCT_DATA } from '../product-slide/product-slide-data';

import { SlideContext } from '../../context/slide-context';

import './slider-dots.styles.scss';

const SliderDots = ({ productSlideIndex, clickHandler, productSlide }) => {
    const { slideIndex, moveDot } = useContext(SlideContext);
    
    const length = productSlide ? (PRODUCT_DATA.length) : (SLIDER_DATA.length);

    const addSliderDotsClass = (idx) => {
        if(productSlide) {
            return productSlideIndex === idx + 1 ? ('dot-active') : ('');
        } else {
            return slideIndex === idx + 1 ? ('dot-active') : ('')
        }
    }
    return(
        <div className={`${productSlide ? 'product-slider-dots-container' : 'slider-dots-container'}`}>
            {Array.from({ length: length }).map((_, idx) => {
                const sliderDotsClass = addSliderDotsClass(idx);
          return (
            <div
              key={idx}
              onClick={productSlide ? () => clickHandler(idx) : () => moveDot(idx + 1)}
              className={'dot ' +  sliderDotsClass}
            ></div>
          );
        })}
        </div>
    )
}

export default SliderDots;