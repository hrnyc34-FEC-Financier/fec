import React from 'react';
import StarRatingReadOnly from './StarRatingReadOnly.jsx';
import StarRatingPost from './StarRatingPost.jsx';

const ProductRatings = ({ currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, productAvgStarRating, ratingsFilter }) => {
  return (
    <div>
      {productAvgStarRating}
      <StarRatingReadOnly productAvgStarRating={productAvgStarRating} />
    </div>
  );
};

export default ProductRatings;