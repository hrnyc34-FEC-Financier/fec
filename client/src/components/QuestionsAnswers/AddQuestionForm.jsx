import React from 'react';

const AddQuestionForm = ({ productName, close }) => {

  return (
    <div id="addQuestionPage">
      <h1>Ask your question</h1>
      <h2>About the {productName}</h2>
      <div id="addQuestionFormContainer">
      <form id="addQuestionForm">
        <label htmlFor="questionInput">Your Question</label>
        <br/>
        <input type="text" id="questionInput" maxLength="1000"></input>
        <br/><br/>
        <label htmlFor="qNicknameInput">What is your nickname?</label>
        <br/>
        <input type="text" id="qNicknameInput" maxLength="60"></input>
        <br/><br/>
        <label htmlFor="qEmailInput">What is your email?</label>
        <br/>
        <input type="text" id="qEmailInput" maxLength="60"></input>
        <br/><br/>
      </form>
      </div>
      <button id="submitButton" onClick={close}>Submit</button>
      <span id="closeX" onClick={close}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span>
    </div>
  )
}

export default AddQuestionForm;