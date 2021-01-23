import searchEngine from '../../lib/searchEngine.js';
import relatedItemList from './relatedItemList.js';
import addTimeSaverList from './addTimeSaverList.js';

// currentProductId, updatedNeedArr, wholeData, rList

const getRelatedItemIds = ( productId, updatedNeedArr, wholeData, relatedList ) => {

  return (dispatch) => {

    return searchEngine.get(`products/${productId}/related`)
      .then(res=>{
        dispatch( relatedItemList( res.data ) );
        if (updatedNeedArr) {
          console.log('getting related Items', res.data);
          dispatch( addTimeSaverList ( updatedNeedArr, wholeData, res.data ) );
        }
      })
      .catch(err=>console.log('adding getRelatedItemIds from current item failed :', err));
  };
};

export default getRelatedItemIds;