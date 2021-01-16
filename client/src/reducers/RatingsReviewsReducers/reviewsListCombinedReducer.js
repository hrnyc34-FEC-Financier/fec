import { combineReducers } from 'redux';
import reviewDisplayLimiter from './reviewsListReducer/reviewDisplayLimiterReducer';
import reviewFeedback from './reviewsListReducer/reviewFeedbackReducer';
import reviewHelpful from './reviewsListReducer/reviewHelpfulReducer';
import reviewImageModal from './reviewsListReducer/reviewImageModalReducer';
import reviewReported from './reviewsListReducer/reviewReportedReducer';
import reviewScroll from './reviewsListReducer/reviewScrollReducer';
import reviewsList from './reviewsListReducer/reviewsListReducer';
import reviewSort from './reviewsListReducer/reviewSortReducer';

const reviewsListCombinedReducer = combineReducers({
  reviewDisplayLimiter,
  reviewFeedback,
  reviewHelpful,
  reviewImageModal,
  reviewReported,
  reviewScroll,
  reviewsList,
  reviewSort
});

export default reviewsListCombinedReducer;