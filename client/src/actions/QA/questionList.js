const changeQuestionList = (questionList) => {
return (
  {type: 'CHANGE_QUESTION_LIST',
  questionList: questionList}
)
};

export default changeQuestionList;