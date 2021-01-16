import searchAPI from '../../lib/searchEngine.js';
import changeProduct from './currentProduct.js';
import changeProductId from './currentProductId.js';

const setSelectedStyle = (product_id) => {
  return (dispatch) => {
    searchAPI
      .get(`products/${product_id}`)
      .then((currentProduct) => {
        dispatch(changeProduct(currentProduct));
        dispatch(changeProductId(currentProduct.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default setSelectedStyle;
