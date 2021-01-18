import React from 'react';
import StarRatingReadOnly from './StarRatingReadOnly.jsx';
import StarRatingPost from './StarRatingPost.jsx';

const ProductRatings = ({ currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, ratingsFilter }) => {
  return (
    <div>
      <StarRatingReadOnly productAvgRating={productAvgRating} />
      <StarRatingPost />
    </div>
  );
};

export default ProductRatings;