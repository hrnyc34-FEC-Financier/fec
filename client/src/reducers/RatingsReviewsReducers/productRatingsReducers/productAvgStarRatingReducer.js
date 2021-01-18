import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const productAvgStarRatingReducer = (state = 0, action) => {
  switch (action.type) {
  case actions.CHANGE_PRODUCT_AVG_STAR_RATING:
    return action.payload.productAvgStarRating;
  default:
    return state;
  }
};

export default productAvgStarRatingReducer;