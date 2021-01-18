import Redux from 'redux';

const yourOutfitListReducer = (state = [], action) => {
  switch ( action.type ) {
  case 'GET_YOUR_OUTFIT_LIST':
    return action.yourOutfitList;
  default : return state;
  }
};

export default yourOutfitListReducer;
