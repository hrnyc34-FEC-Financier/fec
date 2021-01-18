import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewReported = (reviewReported) => ({
  type: actions.CHANGE_REVIEW_REPORTED,
  payload: { reviewReported }
});

export default changeReviewReported;