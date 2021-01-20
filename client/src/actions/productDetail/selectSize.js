import changeQuantityRange from './currentQuantityRange.js';
import changeSize from './currentSize.js';
const setSelectedSize = (size, range) => {
  return (dispatch) => {
    dispatch(changeSize(size));
    dispatch(changeQuantityRange(range));
  };
};

export default setSelectedSize;
