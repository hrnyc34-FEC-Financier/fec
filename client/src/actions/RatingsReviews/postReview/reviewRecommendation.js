import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewRecommendation = (reviewRecommendation) => ({
  type: actions.CHANGE_REVIEW_RECOMMENDATION,
  payload: { reviewRecommendation }
});

export default changeReviewRecommendation;