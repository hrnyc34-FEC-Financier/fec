import searchEngine from '../../lib/searchEngine.js';
import relatedItemList from './relatedItemList.js';
import relatedItemsListDetail from './relatedItemsListDetail.js';
import relatedItemCarouselList from './relatedItemCarouselList.js';
import totalCarouselList from './totalCarouselList.js';

import { calculateProductAvgRating, calculateProductAvgStarRating } from '../RatingsReviews/setRatings.js';

const addRelatedItems = (productId) => {
  return (dispatch) => {

    return searchEngine.get(`products/${productId}/related`)

      .then(res=> {
        return dispatch(relatedItemList( res.data ));
      })

      .then(res=> {
        let list = [];
        let carouselList = res.relatedProductList.map( itemId =>{

          return searchEngine.get(`products/${itemId}`)
            .then(res => {
              let productInfo = res.data;
              list.push( productInfo );

              // searchEngine.get('reviews/meta', { product_id: productId })
              //   .then(({ data }) => {
              //     const productAvgRating = calculateProductAvgRating(data.ratings);
              //     const starRating = calculateProductAvgStarRating(productAvgRating);
              //     productInfo.avgStarRating = starRating;
              //   })
              //   .catch(err=>console.log('adding starRating to related items list  failed :', err));

            })
            .catch(err => console.log('adding related items list of id failed :', err));

        });
        return Promise.all(carouselList)
          .then(()=>{

            console.log('!!!!! Adding data from Full Cycle !!!!!');

            return dispatch( relatedItemsListDetail( list ) );
          });
      })

      .then(res=>{
        let list = [];
        let carouselDetailList = res.relatedItemsListDetail.map( item =>{
          let overall = item;
          return searchEngine.get(`products/${item.id}/styles`)
            .then(res => {
              var productId = item.id;
              overall.styles = res.data.results;

              searchEngine.get('reviews/meta', { product_id: productId })
                .then(({ data }) => {
                  const productAvgRating = calculateProductAvgRating(data.ratings);
                  const starRating = calculateProductAvgStarRating(productAvgRating);
                  overall.avgStarRating = starRating;
                })
                .catch(err=>console.log('adding starRating to related items list  failed :', err));

              list.push( overall );
            })
            .catch(err => console.log('adding style to related items list  failed :', err));
        });

        Promise.all(carouselDetailList)
          .then(()=>{
            dispatch( relatedItemCarouselList(list) );
            dispatch( totalCarouselList(list) );
          });

      })
      .catch(err=>console.log('adding related carouselList failed :', err));
  };
};

export default addRelatedItems;