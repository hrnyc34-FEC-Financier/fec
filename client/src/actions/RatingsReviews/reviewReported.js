import * as actions from './actionTypes';

const changeReviewReported = (reviewReported) => ({
  type: actions.CHANGE_REVIEW_REPORT,
  payload: { reviewReported }
});