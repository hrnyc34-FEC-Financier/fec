import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewCharacteristics = (reviewCharacteristics) => ({
  type: actions.CHANGE_REVIEW_CHARACTERISTICS,
  payload: { reviewCharacteristics }
});

export default changeReviewCharacteristics;