const yourOutfitListReducer = (state = [], action) => {
  switch ( action.type ) {

  case 'ADD_YOUR_OUTFIT_LIST':
    let addId = Number.parseInt(action.addingItem.id);
    let newState = state.slice;
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
    let deleteId = Number.parseInt(action.deletingItemId);
    let deleteState = state.slice();
    for ( let i = 0; i < deleteState.length; i++ ) {
      if ( state[i].id === deleteId ) {
        deleteState.splice(i, 1);
        break;
      }
    }
    return [...deleteState];

  default : return state;
  }
};

export default yourOutfitListReducer;