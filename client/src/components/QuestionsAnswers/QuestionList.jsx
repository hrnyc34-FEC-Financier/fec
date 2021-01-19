import React from "react";
import Question from "./Question.jsx"

const QuestionList = ({ questions, quantity}) => {
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
          <Question question={question} key={question.question_id}/>
        ))}
      </div>
    )
};

export default QuestionList;