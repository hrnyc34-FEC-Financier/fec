import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewRating = (reviewRating) => ({
  type: actions.CHANGE_REVIEW_RATING,
  payload: { reviewRating }
});