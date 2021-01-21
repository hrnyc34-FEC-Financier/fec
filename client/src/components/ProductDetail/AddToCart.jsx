import React from 'react';
import SocialMediaTag from './SocialMediaTag.jsx';
import OutOfStock from './OutStock.jsx';
import InStock from '../../containers/productDetails/InStockContainer.js';

const AddToCart = ({ currentStyle }) => {
  console.log(currentStyle.skus);
  return (
    <div className='add-cart'>
      {currentStyle.skus ? (
        <div>
          {currentStyle.skus.null ? (
            <OutOfStock />
          ) : (
            <InStock />
            // <div>yaya</div>
          )}
        </div>
      ) : null}

      <SocialMediaTag />
    </div>
  );
};

export default AddToCart;
