import * as actions from '../../../actionTypes/RatingsReview/actionTypes.js';

const changeReviewWordCount = (reviewWordCount) => ({
  type: actions.CHANGE_REVIEW_WORD_COUNT,
  payload: { reviewWordCount }
});