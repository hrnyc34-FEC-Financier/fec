import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewSort = (reviewSort) => ({
  type: actions.CHANGE_REVIEW_SORT,
  payload: { reviewSort }
});