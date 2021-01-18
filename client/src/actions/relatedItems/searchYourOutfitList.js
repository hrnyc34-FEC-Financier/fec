import searchEngine from '../../lib/searchEngine.js';
import clientOutfitList from './yourOutfitList.js';

//updating relatedItemCarouselList by adding more detail _'/products/:product_id/styles'
const searchYourOutfitList = ( productId ) => {
  console.log('productId :', productId );

  return (dispatch) => {
    return searchEngine.get(`products/${productId}`)
      .then(res => {
        console.log('res.data for youroutfit', res.data);
        let item = res.data;
        return searchEngine.get(`products/${item.id}/styles`)
          .then(res => {
            item.styles = res.data.results;
            dispatch( clientOutfitList([item]) );
          });
      })
      .catch(err => console.log(err));
  };
};

export default searchYourOutfitList;
