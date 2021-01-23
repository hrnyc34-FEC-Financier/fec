
// tried to get info from saveTimeList

import store from '../../store/store.js';
import searchEngine from '../../lib/searchEngine.js';
import previewItemAdd from './previewItemAdd.js';

const addPreviewItem = ( productId ) => {

  return (dispatch) => {
    return searchEngine.get(`products/${productId}`)
      .then(res => {
        let item = res.data;
        dispatch( previewItemAdd( item ) );
      })
      .catch(err => console.log('adding your previewItem failed', err));
  };
};

export default addPreviewItem;