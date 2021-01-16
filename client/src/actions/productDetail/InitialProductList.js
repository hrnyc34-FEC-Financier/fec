import searchAPI from '../../lib/searchEngine.js';
import setSelectedStyle from './selectStyle.js';
import setProductList from '../../actions/productDetail/productList.js';

const setInitialProductList = () => {
  return (dispatch) => {
    return searchAPI.get('products').then(({ data }) => {
      console.log(data[0].id);
      dispatch(setProductList(data));
      dispatch(setSelectedStyle(data[0].id));
    });
  };
};

export default setInitialProductList;
