import Redux from 'redux';

const yourOutfitListReducer = (state = [], action) => {
  switch ( action.type ) {
  case 'ADD_YOUR_OUTFIT_LIST':
    var addId = Number.parseInt(action.addingItem.id);
    var newState = state;
    if (!state.length) {
      newState = [ action.addingItem ];
    } else {
      for (let i = 0; i < state.length; i++) {
        if ( state[i].id !== addId ) {
          newState = [ ...state, action.addingItem ];
        } else {
          newState = state;
        }
      }
    }
    return newState;

  case 'DELETE_YOUR_OUTFIT_LIST':
    var deleteId = Number.parseInt(action.deletingItemId);

    for ( let i = 0; i < state.length; i++ ) {
      if ( state[i].id === deleteId ) {
        state.splice(i, 1);
      }
    }
    console.log('deleteState ', state);
    return state;
  default : return state;
  }
};

export default yourOutfitListReducer;
