import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = (props) => {

  // console.log("answers:", props.answers)

  if (props.answers.length === 0) {
    return (
      <div className='answerList'>
        <span className='noAnswers'>No answers yet.</span>
      </div>
    );
  } else {
    return (
      <div className='answerList'>
        {props.answers.map((answer) => {
          return <Answer answer={answer} key={answer[0]} />;
        })}
      </div>
    );
  }
};

export default AnswerList;
