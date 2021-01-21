import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewFeedback = (reviewFeedback) => ({
  type: actions.CHANGE_REVIEW_FEEDBACK,
  payload: { reviewFeedback }
});

export default changeReviewFeedback;