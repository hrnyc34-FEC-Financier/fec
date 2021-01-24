import React, { useState } from 'react';
import NoReviewsImage from './NoReviewsImage.jsx';
import SortOptions from './SortOptions.jsx';
import ReviewTile from './ReviewTile.jsx';
import ReviewModalContainer from '../../../containers/RatingsReviews/ReviewModalContainer.js';
import { makeStyles } from '@material-ui/core/Modal';
import Modal from '@material-ui/core/Modal';
// import '../reviewStyles/reviewsList.css';

const ReviewsList = ({ currentProductId, ratingsFilter, productRatings, reviewsList, reviewSort, handleHelpfulReview, handleReportReview, handleSortSelect }) => {

  // ratingsFilter initial state: {1: false, 2: false, 3: false, 4: false, 5: false}
  const filteredReviewsList = [];
  for (let review of reviewsList) {
    if (ratingsFilter.hasOwnProperty(review.rating) && ratingsFilter[review.rating] === true) {
      filteredReviewsList.push(review);
    }
  }

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

  const handleLessReviews = () => {
    setReviewsQuantity(2);
  };

  let showMoreReviewsButton = <button className='reviewsListButton' onClick={handleMoreReviews}>MORE REVIEWS</button>;
  let showLessReviewsButton = <button className='reviewsListButton' onClick={handleLessReviews}>COLLAPSE REVIEWS</button>;

  if (filteredReviewsList.length > 0 && (filteredReviewsList.length < 2 || filteredReviewsList.length <= reviewsQuantity)) {
    showMoreReviewsButton = null;
  } else if (reviewsList.length < 2 || reviewsList.length <= reviewsQuantity) {
    showMoreReviewsButton = null;
  }

  const renderedReviewsList = [];

  for (let i = 0; i < reviewsQuantity; i++) {
    if (filteredReviewsList.length > 0) {
      if (filteredReviewsList[i] !== undefined) {
        renderedReviewsList.push(filteredReviewsList[i]);
      }
    } else {
      if (reviewsList[i] !== undefined) {
        renderedReviewsList.push(reviewsList[i]);
      }
    }
  }

  if ((renderedReviewsList.length < reviewsList.length || renderedReviewsList.length < filteredReviewsList.length) || renderedReviewsList.length <= 2) {
    showLessReviewsButton = null;
  }

  return (
    <div>
      {reviewsList.length === 0 ? (
        <div className='reviewsListContainer'>
          <div className='noReviewsTextContainer'>
            <div className='noReviewsText'>
              <div>This product currently has 0 reviews.</div>
              <div>Please feel free to add a review.</div>
            </div>
            <div className='noReviewsImage'>
              <NoReviewsImage />
            </div>
          </div>
        </div>
      ) : (
        <div className='reviewsListContainer'>
          <div className='reviewsListHeaderContainer'>
            <span className='reviewsListHeaderText'>{`${filteredReviewsList.length > 0 ? filteredReviewsList.length : reviewsList.length} review${filteredReviewsList.length > 1 || reviewsList.length > 1 ? 's' : ''}, sorted by`}</span>
            <span>
              <SortOptions currentProductId={currentProductId} reviewSort={reviewSort} handleSortSelect={handleSortSelect} />
            </span>
          </div>
          <div className='reviewsList'>
            {renderedReviewsList.map(reviewInfo => {
              return <ReviewTile key={`reviewTile${reviewInfo.review_id}`} currentProductId={currentProductId} reviewInfo={reviewInfo} handleHelpfulReview={handleHelpfulReview} handleReportReview={handleReportReview} />;
            })}
          </div>
          {showMoreReviewsButton}
          {showLessReviewsButton}
        </div>
      )}
    </div>
  );
};

export default ReviewsList;

