const changeImageReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_IMAGE':
      return action.currentImage;
    default:
      return state;
  }
};
export default changeImageReducer;
