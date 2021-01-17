import React, { useState, useEffect } from 'react';

const ReviewsList = ({currentProductId, reviewsList, handleReviewsListChange}) => {
  useEffect(() => {
    handleReviewsListChange(currentProductId);
  }, [currentProductId]);

  return (
    <div>
      <pre>{JSON.stringify(reviewsList, null, 2)}</pre>
    </div>
  );
};

export default ReviewsList;