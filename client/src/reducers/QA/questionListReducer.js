import Redux from 'redux';

const changeQuestionListReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_QUESTION_LIST':
      return action.questionList;
    default:
      return state;
  }
};
export default changeQuestionListReducer;
