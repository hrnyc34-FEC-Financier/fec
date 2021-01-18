import React from "react";
import AnswerList from "./AnswerList.jsx"

const Question = (props) => {

  return (
    <div className="question">
      <span className="questionBody">Q: </span>
      <span className="questionBody bodyIndent">{props.question.question_body}</span>
      <span className="right">Helpful? Yes({props.question.question_helpfulness})<span className="divider">|</span><span> Add Answer</span></span>
      <AnswerList answers={Object.entries(props.question.answers)}/>
    </div>
  )
};

export default Question;