import store from '../../store/store.js';
import searchEngine from '../../lib/searchEngine.js';
import clientOutfitList from './yourOutfitList.js';

const state = store.getState();
const outfitList = state.yourOutfitList;

//updating relatedItemCarouselList by adding more detail _'/products/:product_id/styles'
const addYourOutfitList = ( productId ) => {
  console.log('outfitList:', outfitList)

  return (dispatch) => {
    return searchEngine.get(`products/${productId}`)
      .then(res => {
        //console.log('res.data for youroutfit', res.data);
        let item = res.data;
        return searchEngine.get(`products/${item.id}/styles`)
          .then(res => {
            item.styles = res.data.results;
            // dispatch( clientOutfitList( [item] ) )
            outfitList.length === 0 ? dispatch( clientOutfitList( [item] ) )
              : dispatch( clientOutfitList( [...outfitList, item] ) );
          });
      })
      .catch(err => console.log(err));
  };
};

export default addYourOutfitList;


// import store from '../../store/store.js';
// import searchEngine from '../../lib/searchEngine.js';
// import clientOutfitList from './yourOutfitList.js';

// const state = store.getState();
// const outfitList = state.yourOutfitList;

// //updating relatedItemCarouselList by adding more detail _'/products/:product_id/styles'
// const addYourOutfitList = ( productId ) => {
//   console.log('outfitList:', outfitList);

//   return (dispatch) => {
//     return searchEngine.get(`products/${productId}`)
//       .then(res => {
//         //console.log('res.data for youroutfit', res.data);
//         let id = res.data.id;
//         let item = {};
//         item[id] = res.data;

//         return searchEngine.get(`products/${res.data.id}/styles`)
//           .then(res => {
//             item[id].styles = res.data.results;
//             console.log('item_hummm', item[id].id);
//             // dispatch( clientOutfitList( [item] ) )
//             outfitList.length === 0 ? dispatch( clientOutfitList( [item] ) )
//               : dispatch( clientOutfitList( [...outfitList, item] ) );
//           });
//       })
//       .catch(err => console.log(err));
//   };
// };

// export default addYourOutfitList;