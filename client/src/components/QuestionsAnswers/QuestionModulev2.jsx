import React from 'react';
import SearchBar from './SearchBar.jsx';
import QuestionList from './QuestionList.jsx';


const QuestionModule2 = ({ currentProductId, questionList }) => {
  // console.log('product id', currentProductId);
  // console.log('question list', questionList);

  return (
    <div id='questionModule'>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchBar />
      <QuestionList questions={questionList} />
      <button>MORE ANSWERED QUESTIONS</button>
      <button>ADD A QUESTION +</button>
    </div>
  );
};

export default QuestionModule2;
