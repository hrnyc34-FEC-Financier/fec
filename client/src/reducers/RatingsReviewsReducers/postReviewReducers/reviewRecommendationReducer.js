import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewRecommendationReducer = (state = false, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_RECOMMENDATION:
    return action.payload.reviewRecommendation;
  default:
    return state;
  }
};

export default reviewRecommendationReducer;