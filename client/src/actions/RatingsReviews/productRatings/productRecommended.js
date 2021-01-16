import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeProductRecommended = (productRecommended) => ({
  type: actions.CHANGE_PRODUCT_RECOMMENDED,
  payload: { productRecommended }
});