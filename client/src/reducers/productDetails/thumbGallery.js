const changeGalleryReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_GALLERY':
      return action.thumbGallery;
    default:
      return state;
  }
};
export default changeGalleryReducer;
