import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewEmail = (reviewEmail) => ({
  type: actions.CHANGE_REVIEW_EMAIL,
  payload: { reviewEmail }
});