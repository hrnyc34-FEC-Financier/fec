import React from 'react';
import StarRatings from 'react-star-ratings';

let YourOutFitList = ({ product, image, handleAddYourOutfitClick, handleDeleteYourOutfitClick })=>{
  // console.log('product : ', product.styles[0].photos[0].thumbnail_url);

  let reviewStars =
  <StarRatings
    rating={3}
    starDimension='18px'
    starSpacing='0px'
    starRatedColor='#fb9b1c'
    starEmptyColor='#767676'/>;

  let productDetail =
   <div>
     <img src={image} alt='PRODUCT defaultIMG' width="80" /><br />
     CATEGORY : {product.category} <br />
     PRODUCT NAME : {product.name} <br />
     PRICE : {product.default_price} <br />
     RATING : {reviewStars}
   </div>;

  return (
    <div className ='RP_YrOutfit_container'>
      {productDetail}
      <button value={product.id} onClick={(e)=>handleDeleteYourOutfitClick(e.target.value)}>Delete</button>
    </div>
  );
};

export default YourOutFitList;