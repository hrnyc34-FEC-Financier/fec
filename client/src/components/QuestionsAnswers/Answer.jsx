import React from "react";

const Answer = (props) => {

  var date = new Date(props.answer[1].date);
  var dateString = date.toLocaleDateString({}, {timeZone:"UTC",month:"long", day:"numeric", year:"numeric"})

  return (
    <div className="answer">
      <span className="questionBody">A:</span> <span className="answerBody">{props.answer[1].body}</span>
      <br/><br/>
      <span className="answerInfo">By {props.answer[1].answerer_name}, {dateString}</span>
      <span className="divider">|</span>
      <span>Helpful? Yes ({props.answer[1].helpfulness})</span>
      <span className="divider">|</span>
      <span className="reportLink">Report</span>
    </div>
  )
};

export default Answer;