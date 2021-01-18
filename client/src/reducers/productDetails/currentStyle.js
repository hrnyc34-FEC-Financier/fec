const changeStyleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_STYLE':
      return action.currentStyle;
    default:
      return state;
  }
};
export default changeStyleReducer;
