
// getting product id from Overview whenever current product is changed to update related item list
// GET RID OF duplicated items from list

import searchEngine from '../../lib/searchEngine.js';
import relatedItemList from './relatedItemList.js';
import addTimeSaverList from './addTimeSaverList.js';


const getRelatedItemIds = ( productId, updatedNeedArr, wholeData, relatedList ) => {

  return (dispatch) => {

    return searchEngine.get(`products/${productId}/related`)
      .then(res=>{
        dispatch( relatedItemList( res.data ) );
        if (updatedNeedArr) {
          dispatch( addTimeSaverList ( updatedNeedArr, wholeData, res.data ) );
        }
      })
      .catch(err=>console.log('adding getRelatedItemIds from current item failed :', err));
  };
};

export default getRelatedItemIds;