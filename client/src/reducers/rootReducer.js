import { combineReducers } from 'redux';
import RelatedItemReducer from './RelatedItems.jsx';
import changeProductReducer from './productDetails/currentProduct.js';
import changeProductIdReducer from './productDetails/currentProductId.js';
import setProductListReducer from './productDetails/productList.js';
import changeStyleReducer from './productDetails/currentStyle.js';
import changeStyleListReducer from './productDetails/currentStyleList.js';
import changeImageReducer from './productDetails/currentImage.js';
import changeGalleryReducer from './productDetails/thumbGallery.js';

const rootReducer = combineReducers({
  // relatedProductList: RelatedItemReducer,
  productList: setProductListReducer,
  currentProductId: changeProductIdReducer,
  currentProduct: changeProductReducer,
  currentStyle: changeStyleReducer,
  currentStyleList: changeStyleListReducer,
  currentImage: changeImageReducer,
  thumbGallery: changeGalleryReducer,
});

export default rootReducer;
