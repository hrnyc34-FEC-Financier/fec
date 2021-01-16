import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const reviewPhotosReducer = (state = [], action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_PHOTOS:
    return action.payload.reviewPhotos;
  default:
    return state;
  }
};

export default reviewPhotosReducer;