import renderingIndexMinus from './yourOutfitIndexMinus.js';

const decreaseYrIndex = ( value ) => {

  return (dispatch) => {
    dispatch( renderingIndexMinus( value ) );
  };
};

export default decreaseYrIndex;
