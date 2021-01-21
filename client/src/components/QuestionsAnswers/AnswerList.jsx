import React from "react";
import Answer from "./Answer.jsx";
//import ReactCSSTransitionGroup from 'react-transition-group';

const AnswerList = ({answers, quantity, handleMore, handleLess}) => {

  // let sortedAnswers = answers.sort(function(a, b){return b[1].helpfulness-a[1].helpfulness});

  answers.sort(function(a, b){return b[1].helpfulness-a[1].helpfulness})

  let sortedAnswers = answers.reduce((acc, element) => {
    if (element[1].answerer_name === "Seller") {
      return [element, ...acc];
    }
    return [...acc, element];
  }, []);


  let renderedAnswers = [];

  for (var i =0; i < quantity; i++) {
    if (sortedAnswers[i]) {
      renderedAnswers.push(sortedAnswers[i])
    }
  };

  let showHideButton;
  if (quantity < answers.length) {
    showHideButton = <div onClick={handleMore} className="showHideAnswers">SEE MORE ANSWERS</div>
  } else if (answers.length === 2 || quantity > answers.length) {
    showHideButton = null;
  } else {
    showHideButton = <div onClick={handleLess} className="showHideAnswers">COLLAPSE ANSWERS</div>
  }

  // console.log("rendered answers", renderedAnswers);

  console.log("answers:", answers);
  if (answers.length === 0) {
    return (<div className="answerList"><span className="noAnswers">No answers yet.</span></div>)
  } else {
  return (
    <div className="answerList">
        {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> */}
      {renderedAnswers.map((answer) => {
        return (<Answer answer={answer} key={answer[0]} fullLength={answers.length}/>)
      })}
      {showHideButton}
      {/* </ReactCSSTransitionGroup> */}
    </div>
  )}


};

export default AnswerList;
