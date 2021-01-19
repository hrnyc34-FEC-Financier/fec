const changeQuantityRangeReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_QUANTITY_RANGE':
      return action.currentRangeQuantity;
    default:
      return state;
  }
};
export default changeQuantityRangeReducer;
