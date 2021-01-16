import * as actions from '../actionTypes';

const changeProductAvgRating = (productAvgRating) => ({
  type: actions.CHANGE_PRODUCT_AVG_RATING,
  payload: { productAvgRating }
});