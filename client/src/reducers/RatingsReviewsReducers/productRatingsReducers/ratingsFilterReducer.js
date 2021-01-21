import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const ratingsFilterReducer = (state = {1: false, 2: false, 3: false, 4: false, 5: false}, action) => {
  switch (action.type) {
  case actions.CHANGE_RATINGS_FILTER:
    const newState = {...state};
    const rating = action.payload.ratingsFilter;
    if (newState[rating] === false) {
      newState[rating] = true;
    } else {
      newState[rating] = false;
    }
    return newState;
  default:
    return state;
  }
};

export default ratingsFilterReducer;