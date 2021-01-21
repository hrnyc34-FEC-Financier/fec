import renderingIndexDecrease from './indexDecrease.js';


const decreaseIndex = ( length ) => {
  // carouselRenderIndex
  return (dispatch) => {
    dispatch( renderingIndexDecrease( length ) );
  };
};

export default decreaseIndex;
