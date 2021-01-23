import React, {useState} from "react";
import handleHelpfulAnswer from "../../actions/QA/handleHelpfulAnswer.js";
import handleReportAnswer from "../../actions/QA/handleReportAnswer.js";
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Image from './Image.jsx';
import InnerImageZoom from 'react-inner-image-zoom';



const Answer = ({answer, handleQuant, fullLength}) => {


  const [answerHelpful, setAnswerHelpful] = useState({helpfulness: answer[1].helpfulness, helpfulStatus: false});
  const [answerReported, setAnswerReported] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [openI, setOpenI] = useState(false);

  var date = new Date(answer[1].date);
  var dateString = date.toLocaleDateString({}, {timeZone:"UTC",month:"long", day:"numeric", year:"numeric"})

  let addBold = '';
  if (answer[1].answerer_name === "Seller") {
    addBold = 'addBold'
  }

  let photos = answer[1].photos;


  let reportStatus = "Report";
  let reportClass = "reportLink";
  if (answerReported === true){
    reportStatus = "Reported";
    reportClass = "";

  }

  const handleOpen = (e) => {
    setModalImage(e.target.attributes.src.value);
    setOpenI(true);
  };

  const handleClose = () => {
    setOpenI(false);
  };

  return (
    <div className="answer">
      <span className="questionBody">A:</span> <span className="answerBody bodyIndent">{answer[1].body}</span>
      <br/>
      <span className="answerPhotosContainer">
      {photos.map((photo) => (
        <img src={photo} className="answerImage" onClick={handleOpen}></img>
      ))}
      </span>
      <br/>
      <span className="answerInfoStyle">
      <span className="answerInfo">By <span className={addBold}>{answer[1].answerer_name}</span>, {dateString}</span>
      <span className="divider">|</span>
      <span>Helpful?&nbsp;</span>
      <span onClick={() => {if (answerHelpful.helpfulStatus === false) {
        setAnswerHelpful({helpfulness: answerHelpful.helpfulness + 1, helpfulStatus: true}); handleHelpfulAnswer(answer[0])}}} className="yesHelpfulA">Yes</span>
      <span>&nbsp;({answerHelpful.helpfulness})</span>
      <span className="divider">|</span>
      <span className={reportClass}  onClick={() => {
        if (answerReported === false) {
          setAnswerReported(true);
          handleReportAnswer(answer[0])
          }}}>{reportStatus}</span>
      </span>
      <Modal open={openI} onClose={handleClose} onClick={handleClose}>
        <Fade in={openI}>
          <div id="modalContainer">
            <Image imagesrc={modalImage} close={handleClose}/>
          </div>
          </Fade>
      </Modal>
    </div>
  )
};

export default Answer;