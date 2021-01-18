import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewDisplayLimiter = (reviewDisplayLimiter) => ({
  type: actions.CHANGE_REVIEW_DISPLAY_LIMITER,
  payload: { reviewDisplayLimiter }
});

export default changeReviewDisplayLimiter;