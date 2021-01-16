import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewRecommendation = (reviewRecommendation) => ({
  type: actions.CHANGE_REVIEW_RECOMMENDATION,
  payload: { reviewRecommendation }
});