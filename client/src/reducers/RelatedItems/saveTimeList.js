import Redux from 'redux';

const saveTimeListReducer = (state = {}, action) => {
  switch ( action.type ) {

  case 'MAKE_TOTAL_CAROUSEL_LIST':
    let newState = state;
    for (let i = 0; i < action.totalList.length; i++) {
      newState[ action.totalList[i].id ] = action.totalList[i];
    }
    return newState;

  default : return state;
  }
};

export default saveTimeListReducer;