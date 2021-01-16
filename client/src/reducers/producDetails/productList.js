export default setProductList = (productList) => ({
  type: 'SET_PRODUCT_LIST',
  productList: productList,
});
export default setProductListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return action.productList;
    default:
      return state;
  }
};
