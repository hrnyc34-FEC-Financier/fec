import React from 'react';
import StarRatings from 'react-star-ratings';

const RItemList = ({ product, relatedProductStarModal, handleItemToCurrentItemClick, handleStarModalClick, image })=>{
  // console.log('product sale: ', product.styles[0].sale_price);

  let modalRender = relatedProductStarModal && <div className='Modal'>
    <div>
      Comparing
      <a className='TestBlue' value={relatedProductStarModal} onClick={(e)=>handleStarModalClick(e.target.value)}> close </a><br />
      Current product vs Comparing product<br /><br />
      &#10003;  list 1  &#10003;<br />
      &#10003;  list 2  &#10003;<br />
    </div></div>;

  let oriPrice = <div className='carousel_item_oriPrice'> &#36; {product.default_price} </div>;

  let disCountPrice = <><span className='carousel_item_disCountPrice_1'> &#36; {product.default_price} </span><span className='carousel_item_disCountPrice_2'> &#36; {product.default_price} </span></>;

  let price = product.styles[0].sale_price === null ? <>{ oriPrice }</> : <>{disCountPrice}</>;
  // for (let item of product.styles) {
  //   console.log('for loop', item.sale_price);
  //   console.log('for loop', item.style_id);
  // }

  let reviewStars =
  <StarRatings
    rating={3}
    starDimension='18px'
    starSpacing='0px'
    starRatedColor='#fb9b1c'
    starEmptyColor='#767676'/>;

  return (
    <div className='carousel_item' onClick={(e)=>handleItemToCurrentItemClick(product.id)} >

      <img src={image} alt='PRODUCT defaultIMG' width="150" /><br />
      <span className='carousel_item_smallText'>
        {product.category} </span> <br />
      <div className='carousel_item_title'>
        {product.name}
      </div><br />
      {price}
      <br />
      {reviewStars}<br />

      <button value={relatedProductStarModal} onClick={(e)=>handleStarModalClick(e.target.value)}> StarModal </button>

      { modalRender }
    </div>
  );
};

export default RItemList;