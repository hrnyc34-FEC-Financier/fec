import renderingIndexIncrease from './indexIncrease.js';

const increaseIndex = ( value ) => {

  return (dispatch) => {
    dispatch( renderingIndexIncrease( value ) );
  };
};

export default increaseIndex;