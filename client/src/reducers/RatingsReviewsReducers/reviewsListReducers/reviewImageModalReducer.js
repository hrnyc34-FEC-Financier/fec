import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const reviewImageModalReducer = (state = false, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_IMAGE_MODAL:
    return action.payload.reviewImageModal;
  default:
    return state;
  }
};