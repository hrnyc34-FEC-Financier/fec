import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewScroll = (reviewScroll) => ({
  type: actions.CHANGE_REVIEW_SCROLL,
  payload: { reviewScroll }
});

export default changeReviewScroll;