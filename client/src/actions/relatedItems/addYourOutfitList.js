import store from '../../store/store.js';
import searchEngine from '../../lib/searchEngine.js';
import addYourOutfit from './yourOutfitListAdd.js';
import { calculateProductAvgRating, calculateProductAvgStarRating } from '../RatingsReviews/setRatings.js';

const addYourOutfitList = ( productId ) => {

  return (dispatch) => {
    return searchEngine.get(`products/${productId}`)
      .then(res => {
        let item = res.data;
        return searchEngine.get(`products/${item.id}/styles`)
          .then(res => {
            item.styles = res.data.results;

            searchEngine.get('reviews/meta', { product_id : productId })
              .then(({ data }) => {
                const productAvgRating = calculateProductAvgRating(data.ratings);
                const starRating = calculateProductAvgStarRating(productAvgRating);
                item.avgStarRating = starRating;
                console.log('yourOutfit starRating:', starRating)
              })
              .catch(err=>console.log('adding starRating to related items list  failed :', err));


            dispatch( addYourOutfit( item ) );
          });
      })
      .catch(err => console.log('adding your outfit failed', err));
  };
};

export default addYourOutfitList;