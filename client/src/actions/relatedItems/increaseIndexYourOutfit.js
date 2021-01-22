import renderingIndexPlus from './yourOutfitIndexPlus.js';

const increaseIndex = ( value ) => {

  return (dispatch) => {
    dispatch( renderingIndexIncrease( value ) );
  };
};

export default increaseIndex;