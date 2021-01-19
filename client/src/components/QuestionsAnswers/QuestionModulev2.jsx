import React, { useState } from 'react';
import SearchBar from "./SearchBar.jsx";
import QuestionList from "./QuestionList.jsx";
import AddQuestionForm from "./AddQuestionForm.jsx";
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const QuestionModule2 = ({currentProductId, questionList, showAddQuestionModal, currentProduct}) => {

  const [open, setOpen] = useState(false);
  const [questionsQuantity, setQuestionQuant] = useState(2);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log('current product', currentProduct);
  return (
    <div id="questionModule">
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchBar />
      <QuestionList questions={questionList} quantity={questionsQuantity}/>
      <button>MORE ANSWERED QUESTIONS</button><button onClick={handleOpen}>ADD A QUESTION +</button>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <AddQuestionForm productName={currentProduct.name} close={handleClose}/>
        </Fade>
      </Modal>
    </div>
  );
}

export default QuestionModule2;