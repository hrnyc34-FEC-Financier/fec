import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewModal = (reviewModal) => ({
  type: actions.CHANGE_REVIEW_MODAL,
  payload: { reviewModal }
});