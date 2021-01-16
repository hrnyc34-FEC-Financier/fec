import * as actions from './actionTypes';

const changeCurrentReviewsList = (currentReviewsList) => ({
  type: actions.CHANGE_CURRENT_REVIEWS_LIST,
  payload: { currentReviewsList }
});