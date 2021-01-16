import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const ratingsFilterReducer = (state = {}, action) => {
  switch (action.type) {
  case actions.CHANGE_RATINGS_FILTER:
    return action.payload.ratingsFilter;
  default:
    return state;
  }
};