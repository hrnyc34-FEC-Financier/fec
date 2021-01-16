import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeProductRatings = (productRatings) => ({
  type: actions.CHANGE_PRODUCT_RATINGS,
  payload: { productRatings }
});