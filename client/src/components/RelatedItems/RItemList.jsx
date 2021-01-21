import React from 'react';
import StarRatings from 'react-star-ratings';
import RelatedItemModal from './RelatedItemModal.jsx';
import { Modal, Backdrop } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const RItemList = ({
  product,
  image,
  currentProduct,
  relatedProductStarModal,
  handleItemToCurrentItemClick,
  handleStarModalClick
})=>{

  let modalRender =
  <Modal
    open={relatedProductStarModal}
    onClose={ ()=> handleStarModalClick( relatedProductStarModal, product.id ) }>
    <Fade in={relatedProductStarModal}>
      <div>
        <RelatedItemModal
          currentProduct ={currentProduct}
          previewItem={product}
          relatedProductStarModal={relatedProductStarModal}
          handleStarModalClick={handleStarModalClick}
          close={ ()=> handleStarModalClick( relatedProductStarModal, product.id ) }
          ref={null}/>
      </div>
    </Fade>
  </Modal>;

  let oriPrice = <div className='carousel_item_oriPrice'> &#36; { product.default_price } </div>;

  let disCountPrice = <><span className='carousel_item_disCountPrice_1'> &#36; {product.default_price} </span><span className='carousel_item_disCountPrice_2'> &#36; { product.default_price } </span></>;

  let price = product.styles[0].sale_price === null ? <>{ oriPrice }</> : <>{ disCountPrice }</>;
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
    <div className='carousel_item' >
      <div className="carousel_item_image">
        <img src={ image }
          alt='PRODUCT defaultIMG'
          width="150"
          onClick={ ()=> handleItemToCurrentItemClick(product.id) } /><br /></div>
      <div className="carousel_item_body">
        <span className='carousel_item_smallText'>
          { product.category } </span> <br />
        <div className='carousel_item_title'>
          { product.name }
        </div><br />
        {price}
        <br />
        { reviewStars }<br />
      </div>
      <button
        className='modalButton'
        onClick={ ()=> handleStarModalClick( relatedProductStarModal, product.id ) }>
        <svg
          width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
        </svg>
      </button>
      { modalRender }
    </div>
  );
};

export default RItemList;