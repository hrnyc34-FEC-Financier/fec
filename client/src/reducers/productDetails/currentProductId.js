const changeProductIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT_ID':
      return action.currentProductId;
    default:
      return state;
  }
};

export default changeProductIdReducer;
