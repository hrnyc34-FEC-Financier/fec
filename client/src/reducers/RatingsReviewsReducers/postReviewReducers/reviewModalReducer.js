import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewModalReducer = (state = false, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_MODAL:
    return action.payload.reviewModal;
  default:
    return state;
  }
};

export default reviewModalReducer;