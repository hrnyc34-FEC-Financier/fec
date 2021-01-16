import React from "react";
import Question from "./Question.jsx"

const QuestionList = (props) => {

  return (
    <div id="questionList">
      {props.questions.map((question) => (
        <Question question={question} key={question.question_id}/>
      ))}
    </div>
  )
};

export default QuestionList;