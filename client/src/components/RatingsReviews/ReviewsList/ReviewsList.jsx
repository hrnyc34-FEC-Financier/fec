import React, { useState } from 'react';
import SortOptions from './SortOptions.jsx';
import ReviewTile from './ReviewTile.jsx';
import ReviewModalContainer from '../../../containers/RatingsReviews/ReviewModalContainer.js';
import { makeStyles } from '@material-ui/core/Modal';
import Modal from '@material-ui/core/Modal';
//import '../reviewStyles/reviewsList.css';

const ReviewsList = ({ currentProductId, ratingsFilter, productRatings, reviewsList, reviewSort, handleHelpfulReview, handleReportReview, handleSortSelect }) => {

  // ratingsFilter initial state: {1: false, 2: false, 3: false, 4: false, 5: false}
  const filteredReviewsList = [];
  for (let review of reviewsList) {
    if (ratingsFilter.hasOwnProperty(review.rating) && ratingsFilter[review.rating] === true) {
      filteredReviewsList.push(review);
    }
  }

  const calculateTotalReviews = (productRatings) => {
    let totalReviews = 0;
    for (let star in productRatings) {
      totalReviews += Number(productRatings[star]);
    }
    return totalReviews;
  };

  const [reviewsQuantity, setReviewsQuantity] = useState(2);

  const handleMoreReviews = () => {
    if (filteredReviewsList.length > 0) {
      if (filteredReviewsList.length > reviewsQuantity) {
        setReviewsQuantity(prevQuantity => prevQuantity + 2);
      }
    } else {
      if (reviewsList.length > reviewsQuantity) {
        setReviewsQuantity(prevQuantity => prevQuantity + 2);
      }
    }
  };

  let showMoreReviewsButton = <button onClick={handleMoreReviews}>MORE REVIEWS</button>;

  if (filteredReviewsList.length > 0) {
    if (filteredReviewsList.length < 2 || filteredReviewsList.length <= reviewsQuantity) {
      showMoreReviewsButton = null;
    }
  } else {
    if (reviewsList.length < 2 || reviewsList.length <= reviewsQuantity) {
      showMoreReviewsButton = null;
    }
  }

  const renderedReviews = [];

  for (let i = 0; i < reviewsQuantity; i++) {
    if (filteredReviewsList.length > 0) {
      if (filteredReviewsList[i] !== undefined) {
        renderedReviews.push(filteredReviewsList[i]);
      }
    } else {
      if (reviewsList[i] !== undefined) {
        renderedReviews.push(reviewsList[i]);
      }
    }
  }

  return (
    <div>
      {reviewsList.length === 0 ? null : (
        <div className='reviewsListContainer'>
          <div className='reviewsListHeaderContainer'>
            <span className='reviewsListHeaderText'>{`${filteredReviewsList.length > 0 ? filteredReviewsList.length : reviewsList.length} review${filteredReviewsList.length > 1 || reviewsList.length > 1 ? 's' : ''}, sorted by`}</span>
            <span>
              <SortOptions currentProductId={currentProductId} reviewSort={reviewSort} handleSortSelect={handleSortSelect} />
            </span>
          </div>
          <div className='reviewsList'>
            {renderedReviews.map(reviewInfo => {
              return <ReviewTile key={`reviewTile${reviewInfo.review_id}`} currentProductId={currentProductId} reviewInfo={reviewInfo} handleHelpfulReview={handleHelpfulReview} handleReportReview={handleReportReview} />;
            })}
          </div>
          {showMoreReviewsButton}
        </div>
      )}
    </div>
  );
};

export default ReviewsList;

