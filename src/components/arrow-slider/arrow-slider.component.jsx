import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';

import './arrow-slider.styles.scss';

const ArrowSlider = ({ direction, moveSlide }) => {
    const arrowDirection = direction === 'next' ? true : false; 
    return(
        <div onClick={moveSlide} className={`${arrowDirection ? 'next' : 'prev'} arrow-container`}>
            {
                arrowDirection ? (<RightArrow className='arrow' />) : (<LeftArrow className='arrow' />)
            }
        </div>
    )
}

export default ArrowSlider;


