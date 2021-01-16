import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewImageModal = (reviewImageModal) => ({
  type: actions.CHANGE_REVIEW_IMAGE_MODAL,
  payload: { reviewImageModal }
});