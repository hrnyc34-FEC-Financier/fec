import searchEngine from '../../lib/searchEngine.js';
import relatedItemList from './relatedItemList.js';
import relatedItemsListDetail from './relatedItemsListDetail.js';
import relatedItemCarouselList from './relatedItemCarouselList.js';

const addRelatedItems = (productId) => {
  return (dispatch) => {

    return searchEngine.get(`products/${productId}/related`)
      //relatedItemList from '/products/:product_id/related'
      .then(res=> {
        return dispatch(relatedItemList( res.data ));
      })

      //relatedItemsListDetail from '/products/:product_id'
      .then(res=> {
        let list = [];
        let carouselList = res.relatedProductList.map( itemId =>{
          return searchEngine.get(`products/${itemId}`)
            .then(res => {
              list.push( res.data );
            })
            .catch(err => console.log('adding related items list of id failed :', err));
        });
        return Promise.all(carouselList)
          .then(()=>{
            return dispatch( relatedItemsListDetail( list ) );
          });
      })

      //relatedItemCarouselList by adding more detail _'/products/:product_id/styles'
      .then(res=>{
        let list = [];
        let carouselDetailList = res.relatedItemsListDetail.map( item =>{
          let overall = item;
          return searchEngine.get(`products/${item.id}/styles`)
            .then(res => {
              overall.styles = res.data.results;
              list.push( overall );
            })
            .catch(err => console.log('adding style to related items list  failed :', err));
        });

        Promise.all(carouselDetailList)
          .then(()=>{
            dispatch( relatedItemCarouselList(list) );
          });

      })
      .catch(err=>console.log('adding related carouselList failed :', err));
  };
};

export default addRelatedItems;