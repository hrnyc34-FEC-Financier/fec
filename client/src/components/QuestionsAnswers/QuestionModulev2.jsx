import React, { useState } from 'react';
import SearchBar from "./SearchBar.jsx";
import QuestionList from "./QuestionList.jsx";
import AddQuestionForm from "./AddQuestionForm.jsx";
import AddAnswerForm from "./AddAnswerForm.jsx";
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import ReactCSSTransitionGroup from 'react-transition-group';

const QuestionModule2 = ({currentProductId, questionList, showAddQuestionModal, currentProduct}) => {

  const [open, setOpen] = useState(false);
  const [questionsQuantity, setQsQuant] = useState(2);
  const [searchTerm, setSearch] = useState('');


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMoreQs = () => {
    if (questionList.length > questionsQuantity) {
      setQsQuant(questionsQuantity +2);
    }
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  };


  let showMoreQsButton = <button onClick={handleMoreQs} className="endButton">MORE ANSWERED QUESTIONS</button>;

  if (questionList.length < 2 || questionList.length <= questionsQuantity) {
    showMoreQsButton = null ;
  }

  let filtered = [];
  if (searchTerm.length >= 3) {
    filtered = questionList.filter((question) => {
      let qBody = question.question_body.toLowerCase();
      console.log(qBody, typeof qBody, searchTerm, typeof searchTerm); return qBody.includes(searchTerm.toLowerCase())
    })
  }

  if (searchTerm.length >=3) {
    questionList = filtered;
  }

  // console.log("filtered results", filtered);



  // console.log('current product', currentProduct);
  return (
    <div id='questionModule'>
      <div id="qaModuleHeader">
        <h2>QUESTIONS & ANSWERS</h2>
      </div>
      <SearchBar handleSearch={handleChangeSearch}/>
      <QuestionList questions={questionList} quantity={questionsQuantity} productName={currentProduct.name}/>
      {showMoreQsButton}
      <button className="endButton" onClick={handleOpen}>ADD A QUESTION +</button>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <div>
        <AddQuestionForm productName={currentProduct.name} close={handleClose} product_id={currentProductId}/>
        </div>

        </Fade>
      </Modal>
    </div>
  );
};

export default QuestionModule2;
