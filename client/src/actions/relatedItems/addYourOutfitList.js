
// if utilizing current product info, i can remove this file__update Needed!!

import store from '../../store/store.js';
import searchEngine from '../../lib/searchEngine.js';
import addYourOutfit from './yourOutfitListAdd.js';
import { calculateProductAvgRating, calculateProductAvgStarRating } from '../RatingsReviews/setRatings.js';

const addYourOutfitList = ( currentItem, style, starRating ) => {

  return (dispatch) => {
    let item = currentItem;
    item.styles = style;
    item.avgStarRating = starRating;

    dispatch( addYourOutfit( item ) );
  };
};

export default addYourOutfitList;