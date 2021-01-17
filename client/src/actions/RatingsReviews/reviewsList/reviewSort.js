import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewSort = (reviewSort) => ({
  type: actions.CHANGE_REVIEW_SORT,
  payload: { reviewSort }
});

export default changeReviewSort;