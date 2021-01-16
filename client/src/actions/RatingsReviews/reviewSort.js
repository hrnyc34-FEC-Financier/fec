import * as actions from './actionTypes';

const changeReviewSort = (reviewSort) => ({
  type: actions.CHANGE_REVIEW_SORT,
  payload: { reviewSort }
});