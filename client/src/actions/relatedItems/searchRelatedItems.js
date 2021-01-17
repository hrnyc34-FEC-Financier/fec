import searchEngine from '../../lib/searchEngine.js';
import relatedItemList from './relatedItemList.js';
import relatedItemCarouselList from './relatedItemCarouselList.js';

let searchRelatedItems = (productId) => {
  return (dispatch) => {

    return searchEngine.get(`products/${productId}/related`)
      .then(res=> {
        return dispatch(relatedItemList( res.data ));
      })
      .then((res)=>{
        let carouselList = [];
        res.relatedProductList.forEach((itemId)=>{
          return searchEngine.get(`products/${itemId}`)
            .then(res => {
              carouselList.push(res.data);
              return dispatch( relatedItemCarouselList( carouselList ) );
            })
            .catch(err => console.log(err));
        });
      })
      // .then()
      .catch(err => console.log(err));
  };
};

export default searchRelatedItems;

