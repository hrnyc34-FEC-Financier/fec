import React from 'react';
import StarRatings from 'react-star-ratings';

let YourOutFitList = ({ product, image, handleAddYourOutfitClick, handleDeleteYourOutfitClick })=>{

  let oriPrice = <div className='carousel_item_oriPrice'> &#36; {product.default_price} </div>;
  let disCountPrice = <><span className='carousel_item_disCountPrice_1'> &#36; {product.default_price} </span><span className='carousel_item_disCountPrice_2'> &#36; {product.default_price} </span></>;

  let price = product.styles[0].sale_price === null ? <>{ oriPrice }</> : <>{disCountPrice}</>;


  let reviewStars =
  <StarRatings
    rating={3}
    starDimension='15px'
    starSpacing='0px'
    starRatedColor='#fb9b1c'
    starEmptyColor='#767676'/>;


  return (
    <div className='carousel_item'>
      <img src={image} alt='PRODUCT defaultIMG' width="200" /><br />
      <span className='carousel_item_smallText'>
        {product.category} </span> <br />
      <div className='carousel_item_title'>
        {product.name}</div><br />
      {price} <br />
      {reviewStars}
      <button value={product.id} onClick={(e)=>handleDeleteYourOutfitClick(e.target.value)}>Delete</button>
    </div>
  );
};

export default YourOutFitList;