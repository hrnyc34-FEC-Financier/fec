import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewSummary = (reviewSummary) => ({
  type: actions.CHANGE_REVIEW_SUMMARY,
  payload: { reviewSummary }
});