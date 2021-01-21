import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeProductAvgRating = (productAvgRating) => ({
  type: actions.CHANGE_PRODUCT_AVG_RATING,
  payload: { productAvgRating }
});

export default changeProductAvgRating;