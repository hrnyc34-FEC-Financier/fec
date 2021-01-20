import React from 'react';

const ProductInfo = ({ currentProduct, currentStyle }) => (
  <div className='product-info'>
    <div>*****</div>
    <div className='category answerBody'>
      CATEGORY: {currentProduct.category}
    </div>
    <div className='product-name'>{currentProduct.name}</div>
    {currentStyle.sale_price ? (
      <div>
        <div className='answerBody sales-price'>${currentStyle.sale_price}</div>
        <div className='answerBody on-sale'>${currentStyle.original_price}</div>
      </div>
    ) : (
      <div className='answerBody'>${currentStyle.original_price}</div>
    )}
  </div>
);

export default ProductInfo;
