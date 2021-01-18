import searchAPI from '../../lib/searchEngine.js';
import changeProductCharacteristics from './productRatings/productCharacteristics.js';
import changeProductRatings from './productRatings/productRatings.js';
import changeProductRecommended from './productRatings/productRecommended.js';
import changeProductAvgRating from './productRatings/productAvgRating.js';

const calculateProductAvgRating = (productRatings) => {
  let totalRating = 0;
  let totalReviews = 0;
  for (let star in productRatings) {
    const numberReviews = Number(productRatings[star]);
    totalRating += Number(star) * numberReviews;
    totalReviews += numberReviews;
  }
  return Number((totalRating / totalReviews).toFixed(1));
};

const setRatings = (product_id) => {
  return (dispatch) => {
    return searchAPI.get('reviews/meta', {product_id})
      .then(({ data }) => {
        dispatch(changeProductRatings(data.ratings));
        dispatch(changeProductRecommended(data.recommended));
        dispatch(changeProductCharacteristics(data.characteristics));
        dispatch(changeProductAvgRating(calculateProductAvgRating(data.ratings)));
      })
      .catch((err) => console.error('Unable to get Product Rating Data:', err));
  };
};

export default setRatings;