import { useContext, useEffect } from "react";

import { ProductSlideContext } from "../../context/product-slide-context";

import SliderDots from "../slider-dots/slider-dots.component";

import base from "../../assets/product-slider/base.svg";
import { PRODUCT_DATA } from "./product-slide-data";
import "./product-slide.styles.scss";

const ProductSlide = () => {
  const { setProductSlideIndex, productSlideIndex, nextProductSlide } =
    useContext(ProductSlideContext);

    useEffect(() => {
      let timer = setInterval(() => {
        nextProductSlide();
      }, 5000);

      return () => clearInterval(timer);
    });

  const clickHandler = (index) => {
    setProductSlideIndex(index + 1);
  };

  return (
    <div className="product-slide-container">
      <h1 className='product-title'>Our Products</h1>
      <div className='line'></div>
      <div className="base" style={{ backgroundImage: `url(${base})` }}>
        {PRODUCT_DATA.map(({ name, src }, index) => {
          return (
            <div
              key={name}
              className={
                `${productSlideIndex === index + 1 ? "product-active " : ""}` +
                name
              }
              onClick={() => clickHandler(index)}
            >
              <img src={src} />
            </div>
          );
        })}
      </div>
      <div className="description-container">
        {PRODUCT_DATA.map(
          ({ name, title, description, descriptionImageUrl }, index) => {
            return (
              <div
                key={name}
                className={`${
                  productSlideIndex === index + 1 ? "description-active" : ""
                } description`}
              >
                <img className={`${name === 'nut' ? 'nut' : ''} description-image`} src={descriptionImageUrl} />
                <div className="description-detail">
                  <h1 className="description-title">{title}</h1>
                  <span className="text">{description}</span>
                </div>
              </div>
            );
          }
        )}
      </div>
      <SliderDots productSlideIndex={productSlideIndex} clickHandler={clickHandler}  productSlide />
    </div>
  );
};

export default ProductSlide;
