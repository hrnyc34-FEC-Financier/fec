export default changeSizeReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.currentSize;
    default:
      return state;
  }
};
