import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewScrollReducer = (state = false, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_SCROLL:
    return action.payload.reviewScroll;
  default:
    return state;
  }
};

export default reviewScrollReducer;