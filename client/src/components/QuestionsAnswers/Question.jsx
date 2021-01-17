import React from "react";
import AnswerList from "./AnswerList.jsx"

const Question = (props) => {

  return (
    <div className="question">
      <span className="questionBody">Q: {props.question.question_body}</span><span className="right">Helpful? Yes({props.question.question_helpfulness})  |  Add Answer</span>
      <AnswerList answers={Object.entries(props.question.answers)}/>
    </div>
  )
};

export default Question;