import searchAPI from '../../lib/searchEngine.js';
import changeProductCharacteristics from './productRatings/productCharacteristics.js';
import changeProductRatings from './productRatings/productRatings.js';
import changeProductRecommended from './productRatings/productRecommended.js';

const setRatings = (product_id) => {
  return (dispatch) => {
    return searchAPI.get('reviews/meta', {product_id})
      .then(({ data }) => {
        dispatch(changeProductRatings(data.ratings));
        dispatch(changeProductRecommended(data.recommended));
        dispatch(changeProductCharacteristics(data.characteristics));
      })
      .catch((err) => console.error('Unable to get Product Rating Data:', err));
  };
};

export default setRatings;