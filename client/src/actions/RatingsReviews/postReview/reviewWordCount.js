import * as actions from '../../../actionTypes/RatingsReviews/actionTypes.js';

const changeReviewWordCount = (reviewWordCount) => ({
  type: actions.CHANGE_REVIEW_WORD_COUNT,
  payload: { reviewWordCount }
});

export default changeReviewWordCount;