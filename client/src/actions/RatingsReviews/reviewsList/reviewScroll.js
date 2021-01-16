import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewScroll = (reviewScroll) => ({
  type: actions.CHANGE_REVIEW_SCROLL,
  payload: { reviewScroll }
});