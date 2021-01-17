import React from 'react';

const ReviewModal = (reviewModal, reviewRating, reviewSummary, reviewBody, reviewPhotos, reviewRecommendation, reviewUser, reviewEmail, reviewWordCount) => {

  //if reviewModal is false don't show anything;
  //if reviewModal is true, show form
  return (
    <div>
      <pre>{JSON.stringify(reviewsList, null, 2)}</pre>
    </div>
  );
};

export default reviewModal;