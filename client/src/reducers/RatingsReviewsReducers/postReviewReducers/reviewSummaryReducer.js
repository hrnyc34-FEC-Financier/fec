import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const reviewSummaryReducer = (state = '', action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_SUMMARY:
    return action.payload.reviewSummary;
  default:
    return state;
  }
};

export default reviewSummaryReducer;