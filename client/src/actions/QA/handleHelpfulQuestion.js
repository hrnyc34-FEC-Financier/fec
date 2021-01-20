import searchAPI from '../../lib/searchEngine.js';

const handleHelpfulQuestion = (question_id) => {
    return searchAPI.put(`qa/questions/${question_id}/helpful`)
      .then((data) => {
        console.log("Question marked as helpful", data);
      })
      .catch(err => console.error('Unable to mark question as helpful', err));
};

export default handleHelpfulQuestion;