import * as actions from './actionTypes';

const changeReviewHelpful = (reviewHelpful) => ({
  type: actions.CHANGE_REVIEW_HELPFUL,
  payload: { reviewHelpful }
});