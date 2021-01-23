import React, { useState } from 'react';
import { characteristicsMap, createCharacteristicsArray } from '../ProductRatings/characteristicsHelpers.js';
import CharacteristicsRadio from './characteristicsRadio.jsx';
import StarRatingWrite from './StarRatingWrite.jsx';
//import '../review/Styles/reviewModal.css';

const ReviewModal = ({currentProduct, productCharacteristics, handleStarRating, handleSubmitReview, close}) => {
  //local state for reviewBodyWordCount, must be over 50 to be able to submit

  const characteristicsArray = createCharacteristicsArray(productCharacteristics, 'id');
  // const characteristicsArray = createCharacteristicsArray(productCharacteristics);
  //replacing index 1 of characteristic property from rating to characteristic id
  // for (let characteristic of characteristicsArray) {
  //   characteristic.characteristic[1] = (productCharacteristics[characteristic.characteristic[0]].id);
  // }

  //handleState
  const [rating, setRating] = useState(0);
  const [characteristics, setCharacteristics] = useState({});
  const [recommend, setRecommend] = useState(false);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState(['']);

  const handleCharacteristicsChange = (e) => {
    setCharacteristics({...characteristics, [e.target.name]: Number(e.target.value)});
  };

  const handleRecommendChange = (e) => {
    if (e.target.value === 'true') {
      setRecommend(true);
    } else if (e.target.value === 'false') {
      setRecommend(false);
    }
  }

  const handleTextChange = (e) => {
    if (e.target.id === 'reviewSummary') {
      setSummary(e.target.value);
    } else if (e.target.id === 'reviewBody') {
      setBody(e.target.value);
    } else if (e.target.id === 'reviewName') {
      setName(e.target.value);
    } else if (e.target.id === 'reviewEmail') {
      setEmail(e.target.value);
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
          {characteristicsArray.map((characteristic, i) => {
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
          <textarea id='reviewSummary' onChange={handleTextChange} value={summary} maxLength='60' placeholder='Example: Best purchase ever!'></textarea>

          <label htmlFor='reviewBody'>Review Body</label>
          <textarea id='reviewBody' onChange={handleTextChange} value={body} maxLength='1000' placeholder='Why did you like the product or not?'></textarea>

          <label htmlFor='reviewName'>Nickname</label>
          <input type='text' id='reviewName' onChange={handleTextChange} value={name} maxLength='60' placeholder='Example: jackson11!'></input>

          <div id='nameWarning'>For privacy reasons, do not use your full name or email address.</div>

          <label htmlFor='reviewEmail'>Email Address</label>
          <input type='text' id='reviewEmail' onChange={handleTextChange} value={email} maxLength='60' placeholder='Example: jackson11@email.com'></input>

          <div id='emailWarning'>For authentication reasons, you will not be emailed.</div>
        </form>
      </div>
      <button id='submitButton' onClick={(e) => handleSubmitReview(currentProduct.id, {rating, characteristics, recommend, summary, body, name, email})}>
          Submit
      </button>
    </div>
  );
};

export default ReviewModal;