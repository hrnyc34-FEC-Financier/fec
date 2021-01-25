import Redux from 'redux';

const relatedItemsListDetailReducer = (state = [], action) => {
  switch ( action.type ) {

  case 'GET_RELATED_PRODUCT_DETAILS':
    return action.relatedItemsListDetail;

  default : return state;
  }
};

export default relatedItemsListDetailReducer;
