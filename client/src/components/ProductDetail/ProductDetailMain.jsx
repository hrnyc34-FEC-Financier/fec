import React from 'react';
import ProductInfo from '../../containers/productDetails/ProductInfoContainer.js';
import StyleSelector from '../../containers/productDetails/StyleSelectorContainer.js';
import AddToCart from '../../containers/productDetails/AddToCartContainer.js';
import ImageGallery from '../../containers/productDetails/ImageGalleryContainer.js';
import Carousel from '../../containers/productDetails/CarouselContainer.js';
const ProductDetailMain = ({
  productList,
  currentProduct,
  currentProductId,
  currentStyleList,
  currentStyle,
  currentImage,
  thumbGallery,
}) => (
  <div className='product-display-container'>
    <ProductInfo />
    <StyleSelector />
    <AddToCart />
    {/* <Carousel /> */}
    <ImageGallery />
    <pre className='overview'>
      1.1.1.5 Product Overview - This free form text field may exist on some
      items. If it is available it should be displayed.
    </pre>
  </div>
);

export default ProductDetailMain;
