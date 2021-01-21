import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewWordCountReducer = (state = 0, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_WORD_COUNT:
    return action.payload.reviewWordCount;
  default:
    return state;
  }
};

export default reviewWordCountReducer;