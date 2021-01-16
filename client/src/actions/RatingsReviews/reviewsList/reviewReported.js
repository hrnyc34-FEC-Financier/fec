import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewReported = (reviewReported) => ({
  type: actions.CHANGE_REVIEW_REPORTED,
  payload: { reviewReported }
});