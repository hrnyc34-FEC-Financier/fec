import { combineReducers } from 'redux';
import RelatedItemReducer from './RelatedItems.jsx';

let rootReducer = combineReducers({
  relatedProductList: RelatedItemReducer
});

export default rootReducer;