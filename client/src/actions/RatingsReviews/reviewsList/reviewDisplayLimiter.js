import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewDisplayLimiter = (reviewDisplayLimiter) => ({
  type: actions.CHANGE_REVIEW_DISPLAY_LIMITER,
  payload: { reviewDisplayLimiter }
});