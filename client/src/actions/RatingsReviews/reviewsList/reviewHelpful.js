import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewHelpful = (reviewHelpful) => ({
  type: actions.CHANGE_REVIEW_HELPFUL,
  payload: { reviewHelpful }
});

export default changeReviewHelpful;