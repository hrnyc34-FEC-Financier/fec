import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const productRecommendedReducer = (state = {}, action) => {
  switch (action.type) {
  case actions.CHANGE_PRODUCT_RECOMMENDED:
    return action.payload.productRecommended;
  default:
    return state;
  }
};

export default productRecommendedReducer;