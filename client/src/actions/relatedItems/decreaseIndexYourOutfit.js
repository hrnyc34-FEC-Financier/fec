import renderingIndexMinus from './yourOutfitIndexMinus.js';

const decreaseIndex = ( value ) => {
  // carouselRenderIndex
  return (dispatch) => {
    dispatch( renderingIndexDecrease( value ) );
  };
};

export default decreaseIndex;
