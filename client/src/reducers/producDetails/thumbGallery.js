export default changeGallery = (gallery) => ({
  type: 'CHANGE_GALLERY',
  thumbGallery: gallery,
});
export default changeGalleryReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_GALLERY':
      return action.thumbGallery;
    default:
      return state;
  }
};
