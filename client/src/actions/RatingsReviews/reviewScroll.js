import * as actions from './actionTypes';

const changeReviewScroll = (reviewScroll) => ({
  type: actions.CHANGE_REVIEW_SCROLL,
  payload: { reviewScroll }
});