import React from 'react';
import StarRatingList from './StarRatingList.jsx';
import StarRatingReadOnly from './StarRatingReadOnly.jsx';

const ProductRatings = ({ currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, productAvgStarRating, ratingsFilter }) => {
  return (
    <div>
      <StarRatingList productRatings={productRatings} />
      <StarRatingReadOnly productAvgStarRating={productAvgStarRating} />
    </div>
  );
};

export default ProductRatings;