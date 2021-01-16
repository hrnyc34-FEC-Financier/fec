import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const reviewFeedbackReducer = (state = {}, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_FEEDBACK:
    return action.payload.reviewFeedback;
  default:
    return state;
  }
};