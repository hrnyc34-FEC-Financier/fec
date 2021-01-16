import searchEngine from '../lib/searchEngine.jsx';
import { API_TOKEN } from '../../../env/config.js';
import relatedItems from './relatedItems.jsx';

let relatedItemsSearch = ( productId ) => {
  console.log('relatedItemsSearched_id:', productId);

  return function( dispatch ) {
    let options = {
      url: `/products/${productId}/related`,
      headers: { 'Authorization': `token ${ API_TOKEN }`},
      params: { product_id: productId }
    };

    searchEngine.get( options, ( relatedItemList ) => {
      dispatch( relatedItems( relatedItemList ) );
    });

    // post( options, ( results ) => {
    //   dispatch( addButton( results ) );
    // });

    // put( options, ( results ) => {
    //   dispatch( addButton( results ) );
    // });

  };

};

export default relatedItemsSearch;