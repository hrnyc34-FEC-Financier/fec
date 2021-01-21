import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeProductCharacteristics = (productCharacteristics) => ({
  type: actions.CHANGE_PRODUCT_CHARACTERISTICS,
  payload: { productCharacteristics }
});

export default changeProductCharacteristics;