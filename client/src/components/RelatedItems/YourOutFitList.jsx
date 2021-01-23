import React from 'react';
import StarRatings from 'react-star-ratings';

let YourOutFitList = ({
  product,
  image,
  currentProduct,
  handleAddYourOutfitClick,
  handleDeleteYourOutfitClick,
  handleItemToCurrentItemClick
 })=>{


  let starRating = product.avgStarRating !== undefined ? product.avgStarRating : 3.5;
  // console.log('yourOutfitItemItem:', product);
  console.log('avgStarRating:', product.avgStarRating);

  let oriPrice =
  <div className='carousel_item_oriPrice'> &#36; {product.default_price} </div>;
  let disCountPrice =
  <><span className='carousel_item_disCountPrice_1'> &#36; {product.default_price} </span><span className='carousel_item_disCountPrice_2'> &#36; {product.default_price} </span></>;

  let price = product.styles[0].sale_price === null ? <>{ oriPrice }</> : <>{disCountPrice}</>;

  let reviewStars =
  <StarRatings
    rating={starRating}
    starDimension='15px'
    starSpacing='0px'
    starRatedColor='#fb9b1c'
    starEmptyColor='#767676'/>;

  return (
    <div className='carousel_item'>
      <div className="carousel_item_image">
        <img src={image} alt='PRODUCT defaultIMG' width="150" onClick={()=>handleItemToCurrentItemClick( currentProduct.id )} /><br />
      </div>
      <div className="carousel_item_body">
        <span className='carousel_item_smallText'>
          {product.category} </span> <br />
        <div className='carousel_item_title'>
          {product.name}</div><br />
        {price} <br />
        {reviewStars}
      </div>
      <button
        className='deleteButton'
        onClick={ ()=> handleDeleteYourOutfitClick(product.id) }>
        <svg
          width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg>
      </button>
    </div>
  );


};

export default YourOutFitList;