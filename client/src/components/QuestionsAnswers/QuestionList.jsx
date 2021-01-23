import React from "react";
import Question from "./Question.jsx";
import {CSSTransitionGroup} from 'react-transition-group';

const QuestionList = ({ questions, quantity, productName}) => {

  let renderedQuestions  = [];

    for (var i =0; i < quantity; i++) {
      if (questions[i]) {
        renderedQuestions.push(questions[i])
      }
  };

    return (
      <div id="questionList">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

        {renderedQuestions.map((question) => (
          <Question question={question} key={question.question_id} productName={productName}/>
        ))}

        </CSSTransitionGroup>
      </div>
    )
};

export default QuestionList;