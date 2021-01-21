import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewModal = (reviewModal) => ({
  type: actions.CHANGE_REVIEW_MODAL,
  payload: { reviewModal }
});

export default changeReviewModal;