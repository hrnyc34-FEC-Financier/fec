import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeRatingsFilter = (ratingsFilter) => ({
  type: actions.CHANGE_RATINGS_FILTER,
  payload: { ratingsFilter }
});

const resetRatingsFilter = (boolean) => ({
  type: actions.RESET_RATINGS_FILTER
});

export {changeRatingsFilter, resetRatingsFilter};