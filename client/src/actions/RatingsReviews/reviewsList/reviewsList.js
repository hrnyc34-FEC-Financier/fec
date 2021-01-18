import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewsList = (reviewsList) => ({
  type: actions.CHANGE_REVIEWS_LIST,
  payload: { reviewsList }
});

export default changeReviewsList;