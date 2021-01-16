import { combineReducers } from 'redux';
import RelatedItemReducer from './RelatedItems.jsx';
import changeProductReducer from './productDetails/currentProduct.js';
import changeProductIdReducer from './productDetails/currentProductId';
import setProductListReducer from './productDetails/productList';

const rootReducer = combineReducers({
  // relatedProductList: RelatedItemReducer,
  productList: setProductListReducer,
  currentProductId: changeProductIdReducer,
  currentProduct: changeProductReducer,
});

export default rootReducer;
