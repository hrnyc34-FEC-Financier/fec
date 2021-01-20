import React from 'react';
import './reviewModal.css';

const ReviewModal = ({currentProduct, reviewModal, reviewRating, reviewCharacteristics, reviewSummary, reviewBody, reviewPhotos, reviewRecommendation, reviewUser, reviewEmail, reviewWordCount, handleStarRating, close}) => {
  //local state for reviewBodyWordCount, must be over 50 to be able to submit

  return (
    <div id='rModalPage'>
      <h1>Write Your Review</h1>
      <h2>About the {currentProduct.name}</h2>
      <div id='rModalContainer'>
        <form id='rModalForm'>
          <label htmlFor='rSummary'>Review Summary</label>
          <textarea id='rSummary' maxLength='60' placeholder='Review Summary'></textarea>

          <label htmlFor='rBody'>Review Body</label>
          <textarea id='rBody' maxLength='1000' placeholder='Review Body'></textarea>

          <label htmlFor='rUser'>Nickname</label>
          <input type='text' id='rUser' className='rText' maxLength='60'></input>

          <label htmlFor='rEmail'>Email Address</label>
          <input type='text' id='rEmail' className='rText' maxLength='60'></input>

        </form>
      </div>
      <button id='submitButton' onClick={close}>Submit</button>
      <span id='closeX'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-x' viewBox='0 0 16 16'>
        <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>
      </svg></span>
    </div>
  );
};

export default ReviewModal;

