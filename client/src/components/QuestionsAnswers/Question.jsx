import React, { useState } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswerForm from './AddAnswerForm.jsx';
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import handleHelpfulQuestion from '../../actions/QA/handleHelpfulQuestion.js';


const Question = ({ question, productName }) => {

  let answers = Object.entries(question.answers);

  const [answersQuantity, setAQuant] = useState(2);
  const [openA, setOpenA] = useState(false);
  const [questionHelpful, setQuestionHelpful] = useState({
    helpfulness: question.question_helpfulness,
    helpfulStatus: false,
  });

  const handleMoreAs = () => {
    if (answers.length > answersQuantity) {
      setAQuant(answers.length);
    }
  };

  const handleLessAs = () => {
    setAQuant(2);
  };

  const handleOpenA = () => {
    setOpenA(true);
  };

  const handleCloseA = () => {
    setOpenA(false);
  };

  return (
    <div className='question'>
      <span className='questionBody'>Q: </span>
      <span className='questionBody bodyIndent'>{question.question_body}</span>
      <span className='right'>
        Helpful? &nbsp;
        <span
          onClick={() => {
            if (questionHelpful.helpfulStatus === false) {
              setQuestionHelpful({
                helpfulness: questionHelpful.helpfulness + 1,
                helpfulStatus: true,
              });
              handleHelpfulQuestion(question.question_id);
            }
          }}
          className='yesHelpfulQ'
        >
          Yes
        </span>
        <span>&nbsp;({questionHelpful.helpfulness})</span>
        <span className='divider'>|</span>
        <span onClick={handleOpenA} className='addAnswer'>
          {' '}
          Add Answer
        </span>
      </span>
      <AnswerList
        answers={answers}
        quantity={answersQuantity}
        handleMore={handleMoreAs}
        handleLess={handleLessAs}
      />
      <Modal open={openA} onClose={handleCloseA}>
        <Fade in={openA}>
          <div>
            <AddAnswerForm close={handleCloseA} productName={productName} qBody={question.question_body} qID={question.question_id}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Question;
