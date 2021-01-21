import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewPhotos = (reviewPhotos) => ({
  type: actions.CHANGE_REVIEW_PHOTOS,
  payload: { reviewPhotos }
});

export default changeReviewPhotos;