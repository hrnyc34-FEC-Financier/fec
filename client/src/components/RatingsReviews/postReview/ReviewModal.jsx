import React, { useState } from 'react';
import { characteristicsMap, createCharacteristicsArray } from '../ProductRatings/characteristicsHelpers.js';
import CharacteristicsRadio from './characteristicsRadio.jsx';
import './reviewModal.css';

const ReviewModal = ({currentProduct, productCharacteristics, reviewModal, reviewRating, reviewCharacteristics, reviewSummary, reviewBody, reviewPhotos, reviewRecommendation, reviewUser, reviewEmail, reviewWordCount, handleStarRating, close}) => {
  //local state for reviewBodyWordCount, must be over 50 to be able to submit

  const characteristics = createCharacteristicsArray(productCharacteristics);
  //replacing index 1 of characteristic property from rating to characteristic id
  for (let characteristic of characteristics) {
    characteristic.characteristic[1] = (productCharacteristics[characteristic.characteristic[0]].id);
  }

  //handleState
  const [characteristicsState, setCharacteristicsState] = useState({});
  const [recommendState, setRecommendState] = useState({});
  const [summaryState, setSummaryState] = useState('');
  const [bodyState, setBodyState] = useState('');
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [photosState, setPhotosState] = useState([]);
  const [ratingState, setRatingState] = useState(0)

  const handleCharacteristicsChange = (e) => {
    setCharacteristicsState({...characteristicsState, [e.target.name]: e.target.value});
  };
  const handleRecommendChange = (e) => {
    setRecommendState({[e.target.name]: e.target.value})
  }
  const handleTextChange = (e) => {
    if (e.target.id === 'reviewSummary') {
      setSummaryState(e.target.value);
    } else if (e.target.id === 'reviewBody') {
      setBodyState(e.target.value);
    } else if (e.target.id === 'reviewName') {
      setNameState(e.target.value);
    } else if (e.target.id === 'reviewEmail') {
      setEmailState(e.target.value);
    }
  }

  // console.log('reviewSummary', summaryState)
  // console.log('reviewBody', bodyState)
  // console.log('reviewName', nameState)
  // console.log('reviewEmail', emailState)
  // console.log('characteristicsState', characteristicsState);
  // console.log('recommendState', recommendState);
  return (
    <div id='reviewModal'>
      <h1>Write Your Review</h1>
      <h2>About the {currentProduct.name}</h2>
      <div id='reviewModalContainer'>

        <div id='radioFormContainer'>
          {characteristics.map((characteristic, i) => {
            return <CharacteristicsRadio key={`characteristicRadio${i}`} characteristic={characteristic} handleCharacteristicsChange={handleCharacteristicsChange} />;
          })}
        </div>

        <form id='radioForm'>
          <div className='radioTitle'>
            Do you recommend this product?
          </div>
          <div className='radioContainer'>
            <input type='radio' name='recommend' value={true} onChange={handleRecommendChange}/>
            <div className='radioButtonDescription'>Yes</div>
            <input type='radio' name='recommend' value={false} onChange={handleRecommendChange}/>
            <div className='radioButtonDescription'>No</div>
          </div>
        </form>

        <form id='reviewModalForm'>
          <label htmlFor='reviewSummary'>Review Summary</label>
          <textarea id='reviewSummary' onChange={handleTextChange} value={summaryState} maxLength='60' placeholder='Review Summary'></textarea>

          <label htmlFor='reviewBody'>Review Body</label>
          <textarea id='reviewBody' onChange={handleTextChange} value={bodyState} maxLength='1000' placeholder='Review Body'></textarea>

          <label htmlFor='reviewName'>Nickname</label>
          <input type='text' id='reviewName' onChange={handleTextChange} value={nameState} maxLength='60'></input>

          <label htmlFor='reviewEmail'>Email Address</label>
          <input type='text' id='reviewEmail' onChange={handleTextChange} value={emailState} maxLength='60'></input>
        </form>
      </div>
      <button id='submitButton' onClick={close}>Submit</button>
    </div>
  );
};

export default ReviewModal;

