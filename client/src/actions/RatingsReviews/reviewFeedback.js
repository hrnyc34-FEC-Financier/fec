import * as actions from './actionTypes';

const changeReviewFeedback = (reviewFeedback) => ({
  type: actions.CHANGE_REVIEW_FEEDBACK,
  payload: { reviewFeedback }
});