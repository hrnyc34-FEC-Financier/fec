import renderingIndexPlus from './yourOutfitIndexPlus.js';

const increaseYrIndex = ( value ) => {

  return (dispatch) => {
    dispatch( renderingIndexPlus( value ) );
  };
};

export default increaseYrIndex;