import { combineReducers } from 'redux';
import productAvgRating from './productRatingsReducer/productAvgRatingReducer';
import productCharacteristics from './productRatingsReducer/productCharacteristicsReducer';
import productRatings from './productRatingsReducer/productRatingsReducer';
import productRecommended from './productRatingsReducer/productRecommendedReducer';
import ratingsFilter from './productRatingsReducer/ratingsFilterReducer';

const productRatingCombinedReducer = combineReducers({
  productAvgRating,
  productCharacteristics,
  productRatings,
  productRecommended,
  ratingsFilter
});

export default productRatingCombinedReducer;