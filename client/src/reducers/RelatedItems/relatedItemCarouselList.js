import Redux from 'redux';

const relatedItemCarouselListReducer = (state = [], action) => {
  switch ( action.type ) {

  case 'GET_RELATED_PRODUCT_CAROUSEL_LIST':
    return action.relatedProductCarouselList;

  default : return state;
  }
};

export default relatedItemCarouselListReducer;