import React from 'react';
import ProductRatingContainer from '../../containers/RatingsReviews/ProductRatingContainer.js';
import ReviewsListContainer from '../../containers/RatingsReviews/ReviewsListContainer.js';

const RatingsReviewsMain = () => {
  return (
    <div className='ratingsReviewMain ratingsReviewContainer'>
      < ProductRatingContainer />
      {/* < ReviewsListContainer /> */}
    </div>
  );
};

export default RatingsReviewsMain;