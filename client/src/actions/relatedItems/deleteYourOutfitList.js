import searchEngine from '../../lib/searchEngine.js';
import deleteYourOutfit from './yourOutfitListDelete.js';

//updating relatedItemCarouselList by adding more detail _'/products/:product_id/styles'
const deleteYourOutfitList = ( productId ) => {

  return (dispatch) => {
    dispatch( deleteYourOutfit( productId ) );
  };
};

export default deleteYourOutfitList;