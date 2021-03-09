import searchEngine from '../../lib/searchEngine.js';
import relatedItemList from './relatedItemList.js';
import addTimeSaverList from './addTimeSaverList.js';


const getRelatedItemIds = ( productId, updatedNeedArr, wholeData ) => {

  return ( dispatch ) => {

    return searchEngine.get(`products/${productId}/related`)
      .then(res=>{
        let relatedItemsList = res.data.sort();
        for ( let i = 0; i < relatedItemsList.length; i++ ) {
          if ( relatedItemsList[i] === productId ) {
            relatedItemsList.splice(i, 1);
          }
          if (relatedItemsList[i] === relatedItemsList[i + 1]) {
            relatedItemsList.splice(i, 1);
          }
        }

        dispatch( relatedItemList( relatedItemsList ) );
        if ( updatedNeedArr ) {
          dispatch( addTimeSaverList ( wholeData, relatedItemsList ) );
        }
      })
      .catch( err => console.log('adding getRelatedItemIds from current item failed :', err ));
  };
};

export default getRelatedItemIds;