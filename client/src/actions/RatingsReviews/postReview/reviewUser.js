import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewUser = (reviewUser) => ({
  type: actions.CHANGE_REVIEW_USER,
  payload: { reviewUser }
});

export default changeReviewUser;