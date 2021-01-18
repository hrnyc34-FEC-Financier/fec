import { combineReducers } from 'redux';
import RelatedItemReducer from './RelatedItems.jsx';
//productDetails
import changeProductReducer from './productDetails/currentProduct.js';
import changeProductIdReducer from './productDetails/currentProductId.js';
import setProductListReducer from './productDetails/productList.js';
import changeStyleReducer from './productDetails/currentStyle.js';
import changeStyleListReducer from './productDetails/currentStyleList.js';
import changeImageReducer from './productDetails/currentImage.js';
import changeGalleryReducer from './productDetails/thumbGallery.js';
//productDetails: End
//RatingsReviews: reviewsList
import reviewsListReducer from './RatingsReviewsReducers/reviewsListReducers/reviewsListReducer.js';
import reviewsDisplayLimiterReducer from './RatingsReviewsReducers/reviewsListReducers/reviewDisplayLimiterReducer.js';
import reviewFeedbackReducer from './RatingsReviewsReducers/reviewsListReducers/reviewFeedbackReducer.js';
import reviewHelpfulReducer from './RatingsReviewsReducers/reviewsListReducers/reviewHelpfulReducer.js';
import reviewImageModalReducer from './RatingsReviewsReducers/reviewsListReducers/reviewImageModalReducer.js';
import reviewReportedReducer from './RatingsReviewsReducers/reviewsListReducers/reviewReportedReducer.js';
import reviewScrollReducer from './RatingsReviewsReducers/reviewsListReducers/reviewScrollReducer.js';
import reviewSortReducer from './RatingsReviewsReducers/reviewsListReducers/reviewSortReducer.js';
//RatingsReviews: productRatings
import productRatingsReducer from './RatingsReviewsReducers/productRatingsReducers/productRatingsReducer.js';
import productRecommendedReducer from './RatingsReviewsReducers/productRatingsReducers/productRecommendedReducer.js';
import productCharacteristicsReducer from './RatingsReviewsReducers/productRatingsReducers/productCharacteristicsReducer.js';
import productAvgRatingReducer from './RatingsReviewsReducers/productRatingsReducers/productAvgRatingReducer.js';
import productAvgStarRatingReducer from './RatingsReviewsReducers/productRatingsReducers/productAvgStarRatingReducer.js';
import ratingsFilterReducer from './RatingsReviewsReducers/productRatingsReducers/ratingsFilterReducer.js';
//RatingsReviews: postReview
import reviewModalReducer from './RatingsReviewsReducers/postReviewReducers/reviewModalReducer.js';
import reviewRatingReducer from './RatingsReviewsReducers/postReviewReducers/reviewRatingReducer.js';
import reviewCharacteristicsReducer from './RatingsReviewsReducers/postReviewReducers/reviewCharacteristicsReducer.js';
import reviewSummaryReducer from './RatingsReviewsReducers/postReviewReducers/reviewSummaryReducer.js';
import reviewBodyReducer from './RatingsReviewsReducers/postReviewReducers/reviewBodyReducer.js';
import reviewPhotosReducer from './RatingsReviewsReducers/postReviewReducers/reviewPhotosReducer.js';
import reviewRecommendationReducer from './RatingsReviewsReducers/postReviewReducers/reviewRecommendationReducer.js';
import reviewUserReducer from './RatingsReviewsReducers/postReviewReducers/reviewUserReducer.js';
import reviewEmailReducer from './RatingsReviewsReducers/postReviewReducers/reviewEmailReducer.js';
import reviewWordCountReducer from './RatingsReviewsReducers/postReviewReducers/reviewWordCountReducer.js';
//RatingsReviews: End

const rootReducer = combineReducers({
  //productDetails
  productList: setProductListReducer,
  currentProductId: changeProductIdReducer,
  currentProduct: changeProductReducer,
  currentStyle: changeStyleReducer,
  currentStyleList: changeStyleListReducer,
  currentImage: changeImageReducer,
  thumbGallery: changeGalleryReducer,
  //productDetails: End
  //RatingsReviews: reviewsList
  reviewsList: reviewsListReducer,
  reviewsDisplayLimiter: reviewsDisplayLimiterReducer,
  reviewFeedback: reviewFeedbackReducer,
  reviewHelpful: reviewHelpfulReducer,
  reviewImageModal: reviewImageModalReducer,
  reviewReported: reviewReportedReducer,
  reviewScroll: reviewScrollReducer,
  reviewSort: reviewSortReducer,
  //RatingsReviews: productRatings
  productRatings: productRatingsReducer,
  productRecommended: productRecommendedReducer,
  productCharacteristics: productCharacteristicsReducer,
  productAvgRating: productAvgRatingReducer,
  productAvgStarRating: productAvgStarRatingReducer,
  ratingsFilter: ratingsFilterReducer,
  //RatingsReviews: postReview
  reviewModal: reviewModalReducer,
  reviewRating: reviewRatingReducer,
  reviewCharacteristics: reviewCharacteristicsReducer,
  reviewSummary: reviewSummaryReducer,
  reviewBody: reviewBodyReducer,
  reviewPhotos: reviewPhotosReducer,
  reviewRecommendation: reviewRecommendationReducer,
  reviewUser: reviewUserReducer,
  reviewEmail: reviewEmailReducer,
  reviewWordCount: reviewWordCountReducer,
  //RatingsReviews: End
});

export default rootReducer;