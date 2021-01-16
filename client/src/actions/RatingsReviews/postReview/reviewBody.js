import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';


const changeReviewBody = (reviewBody) => ({
  type: actions.CHANGE_REVIEW_BODY,
  payload: { reviewBody }
});