import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReview/actionTypes';

const reviewSortReducer = (state = '', action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_SORT:
    return action.payload.reviewSort;
  default:
    return state;
  }
};