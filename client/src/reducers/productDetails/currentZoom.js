const changeZoomReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_ZOOM':
      return action.zoom;
    default:
      return state;
  }
};
export default changeZoomReducer;
