import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewRating = (reviewRating) => ({
  type: actions.CHANGE_REVIEW_RATING,
  payload: { reviewRating }
});

export default changeReviewRating;