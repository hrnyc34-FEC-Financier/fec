import { combineReducers } from 'redux';
import RelatedItemReducer from './RelatedItems.jsx';
import changeProductReducer from './productDetails/currentProduct.js';
import changeProductIdReducer from './productDetails/currentProductId';
import setProductListReducer from './productDetails/productList';
//RatingsReviews
import reviewsListReducer from './RatingsReviewsReducers/reviewsListReducers/reviewsListReducer.js';


const rootReducer = combineReducers({
  //Product Detail
  productList: setProductListReducer,
  currentProductId: changeProductIdReducer,
  currentProduct: changeProductReducer,
  //RatingsReviews
  reviewsList: reviewsListReducer
});

export default rootReducer;