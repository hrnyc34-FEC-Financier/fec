import { combineReducers } from 'redux';
import RelatedItemReducer from './RelatedItems.jsx';

// product info
import changeProductReducer from './productDetails/currentProduct.js';
import changeProductIdReducer from './productDetails/currentProductId.js';
import setProductListReducer from './productDetails/productList.js';
import changeStyleReducer from './productDetails/currentStyle.js';
import changeStyleListReducer from './productDetails/currentStyleList.js';
import changeImageReducer from './productDetails/currentImage.js';
import changeGalleryReducer from './productDetails/thumbGallery.js';
import changeSizeReducer from './productDetails/currentSize.js';
import changeImageIndexReducer from './productDetails/currentImageIndex.js';

const rootReducer = combineReducers({
  // relatedProductList: RelatedItemReducer,
  productList: setProductListReducer,
  currentProductId: changeProductIdReducer,
  currentProduct: changeProductReducer,
  currentStyle: changeStyleReducer,
  currentStyleList: changeStyleListReducer,
  currentImage: changeImageReducer,
  thumbGallery: changeGalleryReducer,
  currentSize: changeSizeReducer,
  currentImageIndex: changeImageIndexReducer,
});

export default rootReducer;
