import { createContext, useState } from "react";

import { PRODUCT_DATA } from "../components/product-slide/product-slide-data";

export const ProductSlideContext = createContext({
  productSlideIndex: 1,
  setProductSlideIndex: () => {},
  nextProductSlide: () => {},
});

const moveToNextProductSlide = (productSlideIndex) => {
  if (productSlideIndex !== PRODUCT_DATA.length) {
    return productSlideIndex + 1
  } else {
    return 1;
  }
};

export const ProductSlideProvider = ({ children }) => {
  const [productSlideIndex, setProductSlideIndex] = useState(1);

  const nextProductSlide = () => {
    setProductSlideIndex(moveToNextProductSlide(productSlideIndex));
  }

  const value = {
    productSlideIndex,
    setProductSlideIndex,
    nextProductSlide,
  };

  return (
    <ProductSlideContext.Provider value={value}>
      {children}
    </ProductSlideContext.Provider>
  );
};
