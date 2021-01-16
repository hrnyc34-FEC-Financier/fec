import { combineReducers } from 'redux';
import RelatedItemReducer from './RelatedItems.jsx';
// import ProductDetailReducer from './ProductDetail.jsx';
// import QuestionsAnswersReducer  from './QuestionsAnswers.jsx';
// import RatingsReviewsReducer from './RatingsReviews.jsx';

let rootReducer = combineReducers({
  relatedProductList: RelatedItemReducer
});

export default rootReducer;