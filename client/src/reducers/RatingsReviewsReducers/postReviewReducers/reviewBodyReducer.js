import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const reviewBodyReducer = (state = '', action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_BODY:
    return action.payload.reviewBody;
  default:
    return state;
  }
};

export default reviewBodyReducer;