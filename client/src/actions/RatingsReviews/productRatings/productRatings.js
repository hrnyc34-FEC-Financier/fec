import * as actions from '../actionTypes';

const changeProductRatings = (productRatings) => ({
  type: actions.CHANGE_PRODUCT_RATINGS,
  payload: { productRatings }
});