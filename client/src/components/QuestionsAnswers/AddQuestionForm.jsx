import React from 'react';

const AddQuestionForm = ({ productName, close }) => {

  return (
    <div id="addQuestionPage">
      <h1>Ask your question</h1>
      <h2>About the {productName}</h2>
      <div id="addQuestionFormContainer">
      <form id="addQuestionForm">
        <label for="questionInput">Your Question</label>
        <br/>
        <input type="text" id="questionInput" maxlength="1000"></input>
        <br/><br/>
        <label for="qNicknameInput">What is your nickname?</label>
        <br/>
        <input type="text" id="qNicknameInput" maxlength="60"></input>
        <br/><br/>
        <label for="qEmailInput">What is your email?</label>
        <br/>
        <input type="text" id="qEmailInput" maxlength="60"></input>
        <br/><br/>
      </form>
      </div>
      <button id="submitButton" onClick={close}>Submit</button>
      <span id="closeX">x</span>
    </div>
  )
}

export default AddQuestionForm;