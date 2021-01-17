import searchAPI from '../../lib/searchEngine.js';
import productCharacteristics from './productRatings/productCharacteristics.js';
import productRatings from './productRatings/productRatings.js';
import productRecommended from './productRatings/productRecommended.js';

const setRatings = (product_id) => {
  return (dispatch) => {
    return searchAPI.get('reviews/meta', {product_id}).then(({ data }) => {
      dispatch(productCharacteristics(data.characteristics));
      dispatch(productRatings(data.ratings));
      dispatch(productRecommended(data.recommended));
    });
  };
}

export default setRatings;