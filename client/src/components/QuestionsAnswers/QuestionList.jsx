import React from "react";
import Question from "./Question.jsx";
import Fade from '@material-ui/core/Fade';

const QuestionList = ({ questions, quantity, productName}) => {
  console.log("questions", questions)

  let renderedQuestions  = [];

    for (var i =0; i < quantity; i++) {
      if (questions[i]) {
        renderedQuestions.push(questions[i])
      }

  };


  console.log("rendered q", renderedQuestions)
    return (
      <div id="questionList">
        {renderedQuestions.map((question) => (
          <Question question={question} key={question.question_id} productName={productName}/>
        ))}
      </div>
    )
};

export default QuestionList;