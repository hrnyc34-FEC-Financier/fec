import Redux from 'redux';

const saveSpaceListReducer = (state = {}, action) => {
  switch ( action.type ) {
  case 'MAKE_TOTAL_CAROUSEL_LIST':
    var newState = state;
    for (var i = 0; i < action.totalList.length; i++) {
      newState[ action.totalList[i].id ] = action.totalList[i];
    }
    return newState;
  default : return state;
  }
};

export default saveSpaceListReducer;