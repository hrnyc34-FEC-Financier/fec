import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewSummary = (reviewSummary) => ({
  type: actions.CHANGE_REVIEW_SUMMARY,
  payload: { reviewSummary }
});

export default changeReviewSummary;