import searchEngine from '../../lib/searchEngine.js';
import deleteYourOutfit from './yourOutfitListDelete.js';

const deleteYourOutfitList = ( productId ) => {

  return (dispatch) => {
    dispatch( deleteYourOutfit( productId ) );
  };
};

export default deleteYourOutfitList;