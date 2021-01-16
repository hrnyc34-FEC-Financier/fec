import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeRatingsFilter = (ratingsFilter) => ({
  type: actions.CHANGE_RATINGS_FILTER,
  payload: { ratingsFilter }
});