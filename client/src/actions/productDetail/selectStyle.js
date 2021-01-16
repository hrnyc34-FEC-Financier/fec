import searchAPI from '../../lib/searchEngine.js';

const setInitialList = async () => {
  const productList = await searchAPI.get('products');
  dispatch(productList(productList));
};
