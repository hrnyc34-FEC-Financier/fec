import Redux from 'redux';

const previewItemReducer = (state = {}, action) => {
  switch ( action.type ) {
  case 'ADD_PREVIEW_ITEM':
    console.log('addPreviewItem:', action.previewItem);
    return action.previewItem;
  default : return state;
  }
};

export default previewItemReducer;