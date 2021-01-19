import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';

const ReviewsList = ({ currentProductId, productRatings, reviewsList, reviewDisplayLimiter, reviewFeedback, reviewImageModal, reviewScroll, reviewSort, handleHelpfulReview, handleReportReview, handleSortSelect }) => {

  const calculateTotalReviews = (productRatings) => {
    let totalReviews = 0;
    for (let star in productRatings) {
      totalReviews += Number(productRatings[star]);
    }
    return totalReviews;
  };

  return (
    <div>
      <div className='reviewsListHeader'>
        {`${calculateTotalReviews(productRatings)} reviews, sorted by `}
        <span>
          <SortOptions currentProductId={currentProductId} reviewSort={reviewSort} handleSortSelect={handleSortSelect} />
        </span>
      </div>
      <div className='reviewsList'>
        {reviewsList.map(reviewInfo => {
          return <ReviewTile key={reviewInfo.review_id} currentProductId={currentProductId} reviewInfo={reviewInfo} handleHelpfulReview={handleHelpfulReview} handleReportReview={handleReportReview}/>;
        })}
      </div>
    </div>
  );
};

export default ReviewsList;