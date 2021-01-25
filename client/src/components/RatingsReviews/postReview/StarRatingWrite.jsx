import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRatingWrite = ({ rating, setRating }) => {
  return (
    <StarRatings
      rating={rating}
      starDimension='18px'
      starSpacing='0px'
      starRatedColor='#fb9b1c'
      starEmptyColor='#767676'
      starHoverColor='#fb9b1c'
      numberOfStars={5}
      name='rating'
      changeRating={setRating}
    />
  );
};

export default StarRatingWrite;