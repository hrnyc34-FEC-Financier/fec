import store from '../../store/store.js';
import searchEngine from '../../lib/searchEngine.js';
import previewItemAdd from './previewItemAdd.js';

const addPreviewItem = ( productId, productList ) => {

  let previewItem = productList[productId + ''];

  return (dispatch) => {

    dispatch( previewItemAdd( previewItem ) );

  };
};

export default addPreviewItem;