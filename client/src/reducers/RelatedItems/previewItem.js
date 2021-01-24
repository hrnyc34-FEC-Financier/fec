import Redux from 'redux';

const previewItemReducer = (state = {}, action) => {
  switch ( action.type ) {

  case 'ADD_PREVIEW_ITEM':
    return action.previewItem;

  default : return state;
  }
};

export default previewItemReducer;