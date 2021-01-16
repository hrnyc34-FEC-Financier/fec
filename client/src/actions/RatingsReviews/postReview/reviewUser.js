import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewUser = (reviewUser) => ({
  type: actions.CHANGE_REVIEW_USER,
  payload: { reviewUser }
});