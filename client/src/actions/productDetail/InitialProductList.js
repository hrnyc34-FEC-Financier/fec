import searchAPI from '../../lib/searchEngine.js';
import setSelectedStyle from './selectStyle.js';
import setProductList from '../../actions/productDetail/productList.js';

const setInitialProductList = () => {
  return (dispatch) => {
    return searchAPI.get('products').then(({ data }) => {
      console.log(data);
      dispatch(setProductList(data));
      setSelectedStyle(data[0].id);
    });
  };
  // return searchAPI
  //   .get('products')
  //   .then(({ data }) => {
  //     console.log('here');
  //     return (thunk = (dispatch) => {
  //       dispatch(setProductList(data));
  //     });
  //     setSelectedStyle(data[0].id);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

export default setInitialProductList;
