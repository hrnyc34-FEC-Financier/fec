import React from 'react';

const ProductInfo = ({ currentProduct, currentStyle }) => (
  <div className='product-info'>
    <div>*****</div>
    <div className='category'>{currentProduct.category}</div>
    <div className='name'>{currentProduct.name}</div>
    {currentStyle.sale_price ? (
      <div>
        <div className='sales-price'>currentStyle.sale_price</div>
        <div className='reg-price on-sale'>{currentStyle.original_price}</div>
      </div>
    ) : (
      <div className='reg-price'>{currentStyle.original_price}</div>
    )}
  </div>
);

export default ProductInfo;
