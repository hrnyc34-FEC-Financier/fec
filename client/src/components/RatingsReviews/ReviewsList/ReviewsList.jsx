import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = ({ currentProductId, reviewsList, reviewDisplayLimiter, reviewFeedback, reviewImageModal, reviewScroll, reviewSort, handleHelpfulReview, handleReportingReview}) => {
  return (
    <div className='reviewsList'>
      {reviewsList.map(reviewInfo => {
        return <ReviewTile key={reviewInfo.review_id} currentProductId={currentProductId} reviewInfo={reviewInfo} handleHelpfulReview={handleHelpfulReview} handleReportingReview={handleReportingReview}/>;
      })}
    </div>

  );
};

export default ReviewsList;