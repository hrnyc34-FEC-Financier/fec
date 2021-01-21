import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewBody = (reviewBody) => ({
  type: actions.CHANGE_REVIEW_BODY,
  payload: { reviewBody }
});

export default changeReviewBody;