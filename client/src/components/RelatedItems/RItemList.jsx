import React from 'react';

let RItemList = ({ product })=>{
  console.log('product : ', product.photos[0].url);
  return (
    <div>
      <img src={product.photos[0].url} alt='PRODUCT IMG' width="80" /><br />
      CATEGORY {product.category} <br />
      PRODUCT NAME {product.name} <br />
      PRICE {product.default_price} <br />
      RATING
    </div>
  );
};

export default RItemList;