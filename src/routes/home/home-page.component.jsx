import Slider from '../../components/slider/slider.component';
import ProductSlide from '../../components/product-slide/product-slide.component';

import './home-page.styles.scss';

const HomePage = () => {

    return(
        <div className="home-page">
            <Slider />
            <ProductSlide />
        </div>
    )
}

export default HomePage;