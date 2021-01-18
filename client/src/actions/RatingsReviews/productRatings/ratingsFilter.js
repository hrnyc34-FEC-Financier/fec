import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeRatingsFilter = (ratingsFilter) => ({
  type: actions.CHANGE_RATINGS_FILTER,
  payload: { ratingsFilter }
});

export default changeRatingsFilter;