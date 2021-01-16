import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeProductAvgRating = (productAvgRating) => ({
  type: actions.CHANGE_PRODUCT_AVG_RATING,
  payload: { productAvgRating }
});