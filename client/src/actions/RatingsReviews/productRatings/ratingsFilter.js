import * as actions from '../actionTypes';

const changeRatingsFilter = (ratingsFilter) => ({
  type: actions.CHANGE_RATINGS_FILTER,
  payload: { ratingsFilter }
});