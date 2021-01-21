import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const productAvgRatingReducer = (state = 0, action) => {
  switch (action.type) {
  case actions.CHANGE_PRODUCT_AVG_RATING:
    return action.payload.productAvgRating;
  default:
    return state;
  }
};

export default productAvgRatingReducer;