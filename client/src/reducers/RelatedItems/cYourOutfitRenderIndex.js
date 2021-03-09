import Redux from 'redux';

const carouselRenderIndexReducer = (state = 0, action) => {
  switch ( action.type ) {

  case 'INCREASE_INDEX_FOR_RENDER':
    let increment = action.index && state - 1;
    if (increment < 0) {
      return 0;
    }
    return increment;

  case 'DECREASE_INDEX_FOR_RENDER':
    let decrement = action.index && state + 1;
    return decrement;

  default : return state;
  }
};

export default carouselRenderIndexReducer;