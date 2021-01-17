import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeProductRatings = (productRatings) => ({
  type: actions.CHANGE_PRODUCT_RATINGS,
  payload: { productRatings }
});

export default changeProductRatings;