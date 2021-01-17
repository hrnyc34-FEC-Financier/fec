import searchEngine from '../../lib/searchEngine.js';
import relatedItemList from './relatedItemList.js';
import relatedItemCarouselList from './relatedItemCarouselList.js';

const searchRelatedItems = (productId) => {
  return (dispatch) => {

    return searchEngine.get(`products/${productId}/related`)
      .then(res=> {
        return dispatch(relatedItemList( res.data ));
      })
      .then((res)=>{
        let carouselList = [];
        res.relatedProductList.forEach((itemId)=>{
          return searchEngine.get(`products/${itemId}/styles`)
            .then(res => {
              carouselList.push(res.data.results[0]);
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

