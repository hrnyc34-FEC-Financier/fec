import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRatingReadOnly = ({ productAvgRating }) => {
  return (
    <div>
      <StarRatings rating={productAvgRating} starDimension='18px' starSpacing='0px' starRatedColor='#ffc107'/>
    </div>
  );
};

export default StarRatingReadOnly;