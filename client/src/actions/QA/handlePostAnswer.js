import searchAPI from '../../lib/searchEngine.js';

const handlePostAnswer = (question_id, data) => {
    return searchAPI.post(`qa/questions/${question_id}/answers`, data)
      .then((data) => {
        console.log("Answer submitted", data);
      })
      .catch(err => console.error('Unable to submit answer', err));
};

export default handlePostAnswer;