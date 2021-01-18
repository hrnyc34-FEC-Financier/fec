import React from 'react';
import ProductRatingsContainer from '../../containers/RatingsReviews/ProductRatingsContainer.js';
import ReviewsListContainer from '../../containers/RatingsReviews/ReviewsListContainer.js';

const RatingsReviewsMain = () => {
  return (
    <div id ="ratingsContainer">
      < ProductRatingsContainer />
      < ReviewsListContainer />
    </div>
  );
};

export default RatingsReviewsMain;