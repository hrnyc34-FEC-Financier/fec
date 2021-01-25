import Redux from 'redux';

const relatedItemStarModalReducer = (state = false, action) => {
  switch ( action.type ) {

  case 'CHECK_RELATED_PRODUCT_STAR_MODAL_EXISTS':
    return action.relatedProductStarModal;

  default : return state;
  }
};

export default relatedItemStarModalReducer;