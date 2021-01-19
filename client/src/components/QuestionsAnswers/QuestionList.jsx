import React from "react";
import Question from "./Question.jsx"

const QuestionList = ({ questions, quantity}) => {
  console.log(quantity)
  return (
    <div id="questionList">
      {questions.map((question) => (
        <Question question={question} key={question.question_id}/>
      ))}
    </div>
  )
};

export default QuestionList;