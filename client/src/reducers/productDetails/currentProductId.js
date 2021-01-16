const changeProductIdReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT_ID':
      return action.currentProductId;
    default:
      return state;
  }
};

export default changeProductIdReducer;
