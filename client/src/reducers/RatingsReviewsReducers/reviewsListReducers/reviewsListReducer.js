import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const reviewsListReducer = (state = [], action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEWS_LIST:
    return action.payload.reviewsList;
  default:
    return state;
  }
};

export default reviewsListReducer;