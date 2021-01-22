import { combineReducers } from 'redux';


import relatedItemListReducer from './RelatedItems/relatedItemList.js';
import relatedItemsListDetailReducer from './RelatedItems/relatedItemsListDetail.js';
import relatedItemCarouselListReducer from './RelatedItems/relatedItemCarouselList.js';
import relatedItemStarModalReducer from './RelatedItems/relatedItemStarModal.js';
import yourOutfitListReducer from './RelatedItems/yourOutfitList.js';
import carouselRenderIndexReducer from './RelatedItems/carouselRenderIndex.js';
import cYourOutfitRenderIndexReducer from './RelatedItems/cYourOutfitRenderIndex.js';


import changeProductReducer from './productDetails/currentProduct.js';
import changeProductIdReducer from './productDetails/currentProductId.js';
import setProductListReducer from './productDetails/productList.js';
import changeStyleReducer from './productDetails/currentStyle.js';
import changeStyleListReducer from './productDetails/currentStyleList.js';
import changeImageReducer from './productDetails/currentImage.js';
import changeGalleryReducer from './productDetails/thumbGallery.js';
import changeSizeReducer from './productDetails/currentSize.js';
import changeImageIndexReducer from './productDetails/currentImageIndex.js';
import changeQuantityRangeReducer from './productDetails/currentQuantityRange.js';
//productDetails: End
//RatingsReviews: reviewsList
import reviewsListReducer from './RatingsReviewsReducers/reviewsListReducers/reviewsListReducer.js';
import reviewSortReducer from './RatingsReviewsReducers/reviewsListReducers/reviewSortReducer.js';
//RatingsReviews: productRatings
import productRatingsReducer from './RatingsReviewsReducers/productRatingsReducers/productRatingsReducer.js';
import productRecommendedReducer from './RatingsReviewsReducers/productRatingsReducers/productRecommendedReducer.js';
import productCharacteristicsReducer from './RatingsReviewsReducers/productRatingsReducers/productCharacteristicsReducer.js';
import productAvgRatingReducer from './RatingsReviewsReducers/productRatingsReducers/productAvgRatingReducer.js';
import productAvgStarRatingReducer from './RatingsReviewsReducers/productRatingsReducers/productAvgStarRatingReducer.js';
import ratingsFilterReducer from './RatingsReviewsReducers/productRatingsReducers/ratingsFilterReducer.js';
//RatingsReviews: End
//QA
import changeQuestionListReducer from './QA/questionListReducer.js';
import showAddQuestionModalReducer from './QA/showAddQuestionModalReducer.js';

const rootReducer = combineReducers({
  relatedProductList: relatedItemListReducer,
  relatedProductCarouselList: relatedItemCarouselListReducer,
  relatedProductStarModal: relatedItemStarModalReducer,
  relatedItemsListDetail: relatedItemsListDetailReducer,
  yourOutfitList: yourOutfitListReducer,
  carouselRenderIndex: carouselRenderIndexReducer,
  cYourOutfitRenderIndex: cYourOutfitRenderIndexReducer,
  //productDetails: Start
  productList: setProductListReducer,
  currentProductId: changeProductIdReducer,
  currentProduct: changeProductReducer,
  currentStyle: changeStyleReducer,
  currentStyleList: changeStyleListReducer,
  currentImage: changeImageReducer,
  thumbGallery: changeGalleryReducer,
  currentSize: changeSizeReducer,
  currentImageIndex: changeImageIndexReducer,
  currentQuantityRange: changeQuantityRangeReducer,
  //productDetails: End
  //RatingsReviews: reviewsList
  reviewsList: reviewsListReducer,
  reviewSort: reviewSortReducer,
  //RatingsReviews: productRatings
  productRatings: productRatingsReducer,
  productRecommended: productRecommendedReducer,
  productCharacteristics: productCharacteristicsReducer,
  productAvgRating: productAvgRatingReducer,
  productAvgStarRating: productAvgStarRatingReducer,
  ratingsFilter: ratingsFilterReducer,
  //RatingsReviews: End
  questionList: changeQuestionListReducer,
});

export default rootReducer;
