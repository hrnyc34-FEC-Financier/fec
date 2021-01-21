import Redux from 'redux';

const showAddQuestionModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_HIDE_QUESTION_MODAL':
      return action.showAddQuestionModal;
    default:
      return state;
  }
};
export default showAddQuestionModalReducer;
