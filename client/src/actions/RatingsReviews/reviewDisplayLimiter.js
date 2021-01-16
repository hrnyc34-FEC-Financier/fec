import * as actions from './actionTypes';

const changeReviewDisplayLimiter = (reviewDisplayLimiter) => ({
  type: actions.CHANGE_REVIEW_DISPLAY_LIMITER,
  payload: { reviewDisplayLimiter }
});