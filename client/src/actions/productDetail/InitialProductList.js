import searchAPI from '../../lib/searchEngine.js';
import setSelectedProduct from './selectProduct.js';
import setProductList from '../../actions/productDetail/productList.js';
import addRelatedItems from '../relatedItems/addRelatedItems.js';

const setInitialProductList = () => {
  return (dispatch) => {
    return searchAPI.get('products').then(({ data }) => {
      dispatch(setProductList(data));
      dispatch(setSelectedProduct(data[0].id));
      dispatch( addRelatedItems( data[0].id ) );
    });
  };
};

export default setInitialProductList;
