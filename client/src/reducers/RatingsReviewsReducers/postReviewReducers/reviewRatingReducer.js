import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewRatingReducer = (state = 0, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_RATING:
    return action.payload.reviewRating;
  default:
    return state;
  }
};

export default reviewRatingReducer;