import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewUserReducer = (state = '', action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_USER:
    return action.payload.reviewUser;
  default:
    return state;
  }
};

export default reviewUserReducer;