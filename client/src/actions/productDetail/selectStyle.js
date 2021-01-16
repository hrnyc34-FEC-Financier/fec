import searchAPI from '../../lib/searchEngine.js';
import changeProduct from './currentProduct.js';
import changeProductId from './currentProductId.js';

const setSelectedStyle = (product_id) => {
  return (dispatch) => {
    return searchAPI
      .get(`products/${product_id}`)
      .then(({ data }) => {
        dispatch(changeProduct(data));
        dispatch(changeProductId(data.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default setSelectedStyle;
