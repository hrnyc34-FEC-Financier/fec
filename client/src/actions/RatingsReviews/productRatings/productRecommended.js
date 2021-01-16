import * as actions from '../actionTypes';

const changeProductRecommended = (productRecommended) => ({
  type: actions.CHANGE_PRODUCT_RECOMMENDED,
  payload: { productRecommended }
});