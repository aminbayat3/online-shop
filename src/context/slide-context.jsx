import { createContext, useState } from 'react';
import { SLIDER_DATA } from '../components/slider/slider-data';

export const SlideContext = createContext({
    slideIndex: 1,
    nextSlide: () => {},
    prevSlide: () => {},
    moveDot: () => {},
});


const moveToNextSlide = (slideIndex) => {
    if(slideIndex !== SLIDER_DATA.length) {
        return slideIndex + 1;
    } else {
        return 1;
    }
}

const moveToPrevSlide = (slideIndex) => {
    if(slideIndex !== 1) {
        return slideIndex - 1
    } else {
        return SLIDER_DATA.length;
    }
}

export const SlideProvider = ({children}) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        setSlideIndex(moveToNextSlide(slideIndex));
    }

    const prevSlide = () => {
        setSlideIndex(moveToPrevSlide(slideIndex));
    }

    const moveDot = (index) => {
        setSlideIndex(index);
    }


    const value = {
        slideIndex,
        nextSlide,
        prevSlide,
        moveDot,
    }

    return <SlideContext.Provider value={value}>{children}</SlideContext.Provider>

    
}