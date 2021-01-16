import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewHelpful = (reviewHelpful) => ({
  type: actions.CHANGE_REVIEW_HELPFUL,
  payload: { reviewHelpful }
});