import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewFeedback = (reviewFeedback) => ({
  type: actions.CHANGE_REVIEW_FEEDBACK,
  payload: { reviewFeedback }
});