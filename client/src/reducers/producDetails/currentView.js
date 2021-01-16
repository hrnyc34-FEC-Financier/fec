export default changeViewReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return action.view;
    default:
      return state;
  }
};
