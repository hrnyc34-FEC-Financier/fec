import React from 'react';

let YourOutFitList = ({ product })=>{
  // console.log('product : ', product.styles[0].photos[0].thumbnail_url);
  let imageUrl = product.styles[0].photos[0].thumbnail_url;
  let productDetail =
   <div>
     <img src={imageUrl} alt='PRODUCT defaultIMG' width="80" /><br />
     CATEGORY : {product.category} <br />
     PRODUCT NAME : {product.name} <br />
     PRICE : {product.default_price} <br />
     RATING :
   </div>;
  return (
    <div>
      {productDetail}
    </div>
  );
};

export default YourOutFitList;