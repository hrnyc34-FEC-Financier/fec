import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewImageModal = (reviewImageModal) => ({
  type: actions.CHANGE_REVIEW_IMAGE_MODAL,
  payload: { reviewImageModal }
});

export default changeReviewImageModal;