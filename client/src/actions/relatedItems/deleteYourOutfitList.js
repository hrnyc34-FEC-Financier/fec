import store from '../../store/store.js';
import searchEngine from '../../lib/searchEngine.js';
import clientOutfitList from './yourOutfitList.js';

const state = store.getState();
const outfitList = state.yourOutfitList;

//updating relatedItemCarouselList by adding more detail _'/products/:product_id/styles'
const deleteYourOutfitList = ( productId ) => {
  console.log('delete your outfit List:', productId, outfitList);

  return (dispatch) => {
    // dispatch( clientOutfitList( 'Insert manipulated item list' ) );
  };
};

export default deleteYourOutfitList;