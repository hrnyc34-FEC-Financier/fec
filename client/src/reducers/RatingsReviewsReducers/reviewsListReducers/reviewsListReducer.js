import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const reviewsListReducer = (state = [], action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEWS_LIST:
    return action.payload.reviewsList;
  default:
    return state;
  }
};