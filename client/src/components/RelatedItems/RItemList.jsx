import React from 'react';

const RItemList = ({ product, relatedProductStarModal, handleItemToCurrentItemClick, handleStarModalClick })=>{
  // console.log('product id: ', product);
  let imageUrl = product.styles[0].photos[0].thumbnail_url;

  let modalRender = relatedProductStarModal && <div className='Modal'>
    <div>
      Comparing
      <a className='TestBlue' value={relatedProductStarModal} onClick={(e)=>handleStarModalClick(e.target.value)}> close </a><br />
      Current product vs Comparing product<br /><br />
      &#10003;  list 1  &#10003;<br />
      &#10003;  list 2  &#10003;<br />
    </div></div>;

  return (
    <div className='RP_RItems_container'>
      <div>
        <img src={ imageUrl } alt='PRODUCT defaultIMG' width="130" /><br />
        CATEGORY : {product.category} <br />
        PRODUCT NAME : {product.name} <br />
        PRICE : {product.default_price} <br />
        RATING :
      </div>
      <button value={product.id} onClick={(e)=>handleItemToCurrentItemClick(e.target.value)}>current Item</button>
      <button value={relatedProductStarModal} onClick={(e)=>handleStarModalClick(e.target.value)}> StarModal </button>
      { modalRender }
    </div>
  );
};

export default RItemList;