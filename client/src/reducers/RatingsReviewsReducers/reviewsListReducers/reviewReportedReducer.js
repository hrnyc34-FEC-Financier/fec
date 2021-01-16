import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const reviewReportedReducer = (state = {}, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_REPORTED:
    return action.payload.reviewReported;
  default:
    return state;
  }
};