import React from 'react';
import StarRatings from 'react-star-ratings';

const RItemList = ({ product, relatedProductStarModal, handleItemToCurrentItemClick, handleStarModalClick, image })=>{
  // console.log('product id: ', product);

  let modalRender = relatedProductStarModal && <div className='Modal'>
    <div>
      Comparing
      <a className='TestBlue' value={relatedProductStarModal} onClick={(e)=>handleStarModalClick(e.target.value)}> close </a><br />
      Current product vs Comparing product<br /><br />
      &#10003;  list 1  &#10003;<br />
      &#10003;  list 2  &#10003;<br />
    </div></div>;

  let reviewStars =
  <StarRatings
    rating={3}
    starDimension='18px'
    starSpacing='0px'
    starRatedColor='#fb9b1c'
    starEmptyColor='#767676'/>;

  return (
    <div className='RP_RItems_container'>
      <div>
        <img src={ image } alt='PRODUCT defaultIMG' width="130" /><br />
        CATEGORY : {product.category} <br />
        PRODUCT NAME : {product.name} <br />
        PRICE : {product.default_price} <br />
        RATING : {reviewStars}


      </div>
      <button value={product.id} onClick={(e)=>handleItemToCurrentItemClick(e.target.value)}>current Item</button>
      <button value={relatedProductStarModal} onClick={(e)=>handleStarModalClick(e.target.value)}> StarModal </button>
      { modalRender }
    </div>
  );
};

export default RItemList;