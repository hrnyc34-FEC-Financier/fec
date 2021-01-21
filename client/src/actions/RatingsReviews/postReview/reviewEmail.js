import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewEmail = (reviewEmail) => ({
  type: actions.CHANGE_REVIEW_EMAIL,
  payload: { reviewEmail }
});

export default changeReviewEmail;