import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewsList = (reviewsList) => ({
  type: actions.CHANGE_REVIEWS_LIST,
  payload: { reviewsList }
});