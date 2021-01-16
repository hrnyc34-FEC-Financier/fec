import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeProductCharacteristics = (productCharacteristics) => ({
  type: actions.CHANGE_PRODUCT_CHARACTERISTICS,
  payload: { productCharacteristics }
});