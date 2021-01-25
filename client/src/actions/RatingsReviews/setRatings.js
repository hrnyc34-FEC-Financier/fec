import searchAPI from '../../lib/searchEngine.js';
import changeProductRatings from './productRatings/productRatings.js';
import changeProductRecommended from './productRatings/productRecommended.js';
import changeProductCharacteristics from './productRatings/productCharacteristics.js';
import changeProductAvgRating from './productRatings/productAvgRating.js';
import changeProductAvgStarRating from './productRatings/productAvgStarRating.js';

const calculateProductAvgRating = (productRatings) => {
  if (Object.keys(productRatings).length === 0) {
    return 0;
  }
  let totalRating = 0;
  let totalReviews = 0;
  for (let star in productRatings) {
    const numberReviews = Number(productRatings[star]);
    totalRating += Number(star) * numberReviews;
    totalReviews += numberReviews;
  }
  return Number((totalRating / totalReviews).toFixed(1));
};

const calculateProductAvgStarRating = (productAvgRating) => {
  return Number((Math.round(productAvgRating * 4) / 4).toFixed(2));
};

const setRatings = (product_id) => {
  return (dispatch) => {
    return searchAPI.get('reviews/meta', {product_id})
      .then(({ data }) => {
        const productAvgRating = calculateProductAvgRating(data.ratings);
        dispatch(changeProductRatings(data.ratings));
        dispatch(changeProductRecommended(data.recommended));
        dispatch(changeProductCharacteristics(data.characteristics));
        dispatch(changeProductAvgRating(productAvgRating));
        dispatch(changeProductAvgStarRating(calculateProductAvgStarRating(productAvgRating)));
      })
      .catch((err) => console.error('Unable to get Product Rating Data:', err));
  };
};

export {
  calculateProductAvgRating,
  calculateProductAvgStarRating,
  setRatings
};
