export default changeStyleReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_STYLE':
      return action.currentStyle;
    default:
      return state;
  }
};
