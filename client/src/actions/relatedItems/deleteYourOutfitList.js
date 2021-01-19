import store from '../../store/store.js';
import searchEngine from '../../lib/searchEngine.js';
import clientOutfitList from './yourOutfitList.js';

const state = store.getState();
const outfitList = state.yourOutfitList;

//updating relatedItemCarouselList by adding more detail _'/products/:product_id/styles'
const deleteYourOutfitList = ( productId ) => {
  var numId = Number.parseInt(productId);
  console.log('delete your outfit List:', productId,numId, outfitList);
  // var test = [{id: 11111}, {id: 22345}];
  // for (let i = 0; i < test.length; i++) {
  //   if ( test[i].id === numId ) {
  //     test.splice(i, 1);
  //   }
  // }
  // console.log('test : ', test);

  for (let i = 0; i < outfitList.length; i++) {
    if ((outfitList[i].id ===numId) && (outfitList[i].id !== undefined) ) {
      outfitList.splice(i, 1);
    }
  }

  return (dispatch) => {
    dispatch( clientOutfitList( outfitList ) );
  };
};

export default deleteYourOutfitList;