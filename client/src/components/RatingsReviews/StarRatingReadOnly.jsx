import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRatingReadOnly = ({ productAvgStarRating }) => {
  return (
    <div>
      <StarRatings rating={productAvgStarRating} starDimension='18px' starSpacing='0px' starRatedColor='#ffc107'/>
    </div>
  );
};

export default StarRatingReadOnly;