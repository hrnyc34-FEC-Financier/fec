import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeProductRecommended = (productRecommended) => ({
  type: actions.CHANGE_PRODUCT_RECOMMENDED,
  payload: { productRecommended }
});

export default changeProductRecommended;