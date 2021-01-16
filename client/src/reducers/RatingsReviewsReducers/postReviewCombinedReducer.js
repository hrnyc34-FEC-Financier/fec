import { combineReducers } from 'redux';
import reviewBody from './postReviewReducer/reviewBodyReducer';
import reviewEmail from './postReviewReducer/reviewEmailReducer';
import reviewModal from './postReviewReducer/reviewModalReducer';
import reviewPhotos from './postReviewReducer/reviewPhotosReducer';
import reviewRating from './postReviewReducer/reviewRatingReducer';
import reviewRecommendation from '/postReviewReducer./reviewRecommendationReducer';
import reviewUser from './postReviewReducer/reviewUserReducer';
import reviewWordCount from './postReviewReducer/reviewWordCountReducer';

const postReviewCombinedReducer = combineReducers({
  reviewBody,
  reviewEmail,
  reviewModal,
  reviewPhotos,
  reviewRating,
  reviewRecommendation,
  reviewUser,
  reviewWordCount
});

export default postReviewCombinedReducer;