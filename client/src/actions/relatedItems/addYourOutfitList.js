import store from '../../store/store.js';
import searchEngine from '../../lib/searchEngine.js';
import addYourOutfit from './yourOutfitListAdd.js';

const addYourOutfitList = ( productId ) => {

  return (dispatch) => {
    return searchEngine.get(`products/${productId}`)
      .then(res => {
        let item = res.data;
        return searchEngine.get(`products/${item.id}/styles`)
          .then(res => {
            item.styles = res.data.results;
            dispatch( addYourOutfit( item ) );
          });
      })
      .catch(err => console.log('adding your outfit failed', err));
  };
};

export default addYourOutfitList;