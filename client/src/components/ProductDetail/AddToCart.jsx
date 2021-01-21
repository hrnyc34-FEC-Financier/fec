import React from 'react';
import SocialMediaTag from './SocialMediaTag.jsx';
import OutOfStock from './OutStock.jsx';
import InStock from '../../containers/productDetails/InStockContainer.js';

const AddToCart = ({ currentStyle }) => (
  <div className='add-cart'>
    {currentStyle.skus ? (
      <div>{currentStyle.skus.null ? <OutOfStock /> : <InStock />}</div>
    ) : null}

    <SocialMediaTag />
  </div>
);

export default AddToCart;
