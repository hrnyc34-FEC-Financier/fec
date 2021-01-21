import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const productCharacteristicsReducer = (state = {}, action) => {
  switch (action.type) {
  case actions.CHANGE_PRODUCT_CHARACTERISTICS:
    return action.payload.productCharacteristics;
  default:
    return state;
  }
};

export default productCharacteristicsReducer;