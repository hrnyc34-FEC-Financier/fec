const changeImageIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_IMAGE_INDEX':
      return action.currentImageIndex;
    default:
      return state;
  }
};
export default changeImageIndexReducer;
