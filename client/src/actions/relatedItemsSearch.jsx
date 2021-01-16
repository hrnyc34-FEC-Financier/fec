import searchEngine from '../lib/searchEngine.jsx';
import { API_TOKEN } from '../../../env/config.js';
import relatedItems from './relatedItems.jsx';

let relatedItemsSearch = ( productId ) => {

  return function( dispatch ) {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productId}/related`,
      // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products',
      headers: { 'Authorization': API_TOKEN },
      // params: { product_id: productId }
    };

    searchEngine.get( options )
      .then( relatedItemList => {
        dispatch( relatedItems( relatedItemList ) );
      });
  };

};

export default relatedItemsSearch;


// post( options, ( results ) => {
//   dispatch( addButton( results ) );
// });

// put( options, ( results ) => {
//   dispatch( addButton( results ) );
// });