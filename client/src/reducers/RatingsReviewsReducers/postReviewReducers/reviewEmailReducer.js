import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewEmailReducer = (state = '', action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_EMAIL:
    return action.payload.reviewEmail;
  default:
    return state;
  }
};

export default reviewEmailReducer;