import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeProductAvgStarRating = (productAvgStarRating) => ({
  type: actions.CHANGE_PRODUCT_AVG_STAR_RATING,
  payload: { productAvgStarRating }
});

export default changeProductAvgStarRating;