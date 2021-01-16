import React from "react";
import Answer from "./Answer.jsx"

const AnswerList = (props) => {

  console.log("answers:", props.answers)

  return (
    <div id="answerList">
      <Answer/>
    </div>
  )
};

export default AnswerList;