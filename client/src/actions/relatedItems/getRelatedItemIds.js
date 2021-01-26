
// THIS FILE for getting current product id clicked from Overview to update related item list

// GET RID OF duplicated items from list
// GET RID OF current product from list

import searchEngine from '../../lib/searchEngine.js';
import relatedItemList from './relatedItemList.js';
import addTimeSaverList from './addTimeSaverList.js';


const getRelatedItemIds = ( productId, updatedNeedArr, wholeData ) => {

  return (dispatch) => {

    return searchEngine.get(`products/${productId}/related`)
      .then(res=>{
        dispatch( relatedItemList( res.data ) );
        if (updatedNeedArr) {
          dispatch( addTimeSaverList ( wholeData, res.data ) );
        }
      })
      .catch(err=>console.log('adding getRelatedItemIds from current item failed :', err));
  };
};

export default getRelatedItemIds;