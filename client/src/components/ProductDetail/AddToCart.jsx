import React from 'react';
import SocialMediaTag from './SocialMediaTag.jsx';
import OutOfStock from './OutStock.jsx';
import InStock from '../../containers/productDetails/InStockContainer.js';

const AddToCart = ({
  currentStyle,
  addToOutfitList,
  currentProduct,
  outfitList,
}) => {
  const favorite = (e) => {
    e.preventDefault();
    if (!outfitList.includes(currentProduct.id)) {
      addToOutfitList(currentProduct.id);
    }
  };
  return (
    <div className='add-cart'>
      {currentStyle.skus ? (
        <div>
          {currentStyle.skus.null ? (
            <OutOfStock favorite={favorite} />
          ) : (
            <InStock favorite={favorite} />
          )}
        </div>
      ) : null}

      <SocialMediaTag />
    </div>
  );
};

export default AddToCart;
