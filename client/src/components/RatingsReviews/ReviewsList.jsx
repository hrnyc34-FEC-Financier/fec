import React, { useState, useEffect } from 'react';

const ReviewsList = ({currentProductId, reviewsList, reviewDisplayLimiter, reviewFeedback, reviewHelpful, reviewImageModal, reviewReported, reviewScroll, reviewSort, handleReviewsListChange}) => {

  if (currentProductId !== '') {
    useEffect(() => {
      handleReviewsListChange(currentProductId);
    }, [currentProductId]);
  }

  return (
    <div>
      <pre>{JSON.stringify(reviewsList, null, 2)}</pre>
    </div>
  );
};

export default ReviewsList;