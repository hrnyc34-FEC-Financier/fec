import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const productRecommendedReducer = (state = 0, action) => {
  switch (action.type) {
  case actions.CHANGE_PRODUCT_RECOMMENDED:
    return action.payload.productRecommended;
  default:
    return state;
  }
};

export default productRecommendedReducer;