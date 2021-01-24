import Redux from 'redux';

const relatedItemListReducer = (state = [], action) => {
  switch ( action.type ) {

  case 'GET_RELATED_PRODUCT_LIST':
    return action.relatedProductList;

  default : return state;
  }
};

export default relatedItemListReducer;