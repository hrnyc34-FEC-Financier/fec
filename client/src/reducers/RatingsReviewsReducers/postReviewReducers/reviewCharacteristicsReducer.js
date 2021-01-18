import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewCharacteristicsReducer = (state = '', action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_CHARACTERISTICS:
    return action.payload.reviewCharacteristics;
  default:
    return state;
  }
};

export default reviewCharacteristicsReducer;