import Redux from 'redux';

const carouselRenderIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case 'PLUS_INDEX_FOR_RENDER':
      let increment = action.index && state - 1;
      if (increment < 0) {
        return 0;
      }
      return increment;

    case 'MINUS_INDEX_FOR_RENDER':
      let decrement = action.index && state + 1;
      return decrement;

    case 'RESET_CAROUSEL':
      return action.reset;

    default:
      return state;
  }
};

export default carouselRenderIndexReducer;
