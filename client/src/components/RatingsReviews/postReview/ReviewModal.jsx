import React, { useState } from 'react';
import { characteristicsMap, createCharacteristicsArray } from '../ProductRatings/characteristicsHelpers.js';
import CharacteristicsRadio from './characteristicsRadio.jsx';
import StarRatingWrite from './StarRatingWrite.jsx';
import './reviewModal.css';

const ReviewModal = ({currentProduct, productCharacteristics, handleStarRating, handleSubmitReview, close}) => {
  //local state for reviewBodyWordCount, must be over 50 to be able to submit

  const characteristics = createCharacteristicsArray(productCharacteristics);
  //replacing index 1 of characteristic property from rating to characteristic id
  for (let characteristic of characteristics) {
    characteristic.characteristic[1] = (productCharacteristics[characteristic.characteristic[0]].id);
  }

  //handleState
  const [rating, setRating] = useState(0)
  const [characteristicsState, setCharacteristicsState] = useState({});
  const [recommendState, setRecommendState] = useState({});
  const [summaryState, setSummaryState] = useState('');
  const [bodyState, setBodyState] = useState('');
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [photosState, setPhotosState] = useState([]);

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

  const starRatingMeaning = (ratingState) => {
    if (ratingState === 1) {
      return 'Poor';
    } else if (ratingState === 2) {
      return 'Fair';
    } else if (ratingState === 3) {
      return 'Average';
    } else if (ratingState === 4) {
      return 'Good';
    } else if (ratingState === 5) {
      return 'Great';
    }
  }

  // console.log(rating);
  // console.log(characteristicsState)
  return (
    <div id='reviewModal'>
      <h1>Write Your Review</h1>
      <h2>About the {currentProduct.name}</h2>
      <div id='reviewModalContainer'>

        <div id='starRatingContainer'>
          <div id='starRatingTitle'>
            How would you rate this product?
          </div>
          <div id='starRatingAndText'>
            <StarRatingWrite id='starRating' rating={rating} setRating={setRating}/>
            <div id='starRatingText'>{starRatingMeaning(rating)}</div>
          </div>
        </div>

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
          <textarea id='reviewSummary' onChange={handleTextChange} value={summaryState} maxLength='60' placeholder='Example: Best purchase ever!'></textarea>

          <label htmlFor='reviewBody'>Review Body</label>
          <textarea id='reviewBody' onChange={handleTextChange} value={bodyState} maxLength='1000' placeholder='Why did you like the product or not?'></textarea>

          <label htmlFor='reviewName'>Nickname</label>
          <input type='text' id='reviewName' onChange={handleTextChange} value={nameState} maxLength='60' placeholder='Example: jackson11!'></input>

          <div id='nameWarning'>For privacy reasons, do not use your full name or email address.</div>

          <label htmlFor='reviewEmail'>Email Address</label>
          <input type='text' id='reviewEmail' onChange={handleTextChange} value={emailState} maxLength='60' placeholder='Example: jackson11@email.com'></input>

          <div id='emailWarning'>For authentication reasons, you will not be emailed.</div>
        </form>
      </div>
      <button id='submitButton' onClick={(e) => {handleSubmitReview(e, currentProduct.id, {rating, characteristicsState, recommendState, summaryState, bodyState, nameState, emailState})}}>
          Submit
      </button>
    </div>
  );
};

export default ReviewModal;