import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewPhotos = (reviewPhotos) => ({
  type: actions.CHANGE_REVIEW_PHOTOS,
  payload: { reviewPhotos }
});