import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewSortReducer = (state = '', action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_SORT:
    return action.payload.reviewSort;
  default:
    return state;
  }
};

export default reviewSortReducer;