import React from 'react';
import ProductInfo from '../../containers/productDetails/ProductInfoContainer.js';
import StyleSelector from '../../containers/productDetails/StyleSelectorContainer.js';
import AddToCart from '../../containers/productDetails/AddToCartContainer.js';
import ImageGallery from '../../containers/productDetails/ImageGalleryContainer.js';
import ProductOverview from '../../containers/productDetails/productOverviewContainer.js';

const ProductDetailMain = () => (
  <div className='product-display-container'>
    <div className='image-container'>
      <ImageGallery />
    </div>
    <div className='side-bar-container'>
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </div>
    <ProductOverview />
  </div>
);

export default ProductDetailMain;
