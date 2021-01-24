import renderingIndexDecrease from './indexDecrease.js';

const decreaseIndex = ( value ) => {

  return (dispatch) => {
    dispatch( renderingIndexDecrease( value ) );
  };
};

export default decreaseIndex;
