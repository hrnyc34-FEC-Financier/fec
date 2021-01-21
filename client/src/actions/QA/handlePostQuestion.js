import searchAPI from '../../lib/searchEngine.js';

const handlePostQuestion = (data) => {
    return searchAPI.post(`qa/questions`, data)
      .then((data) => {
        console.log("Question submitted", data);
      })
      .catch(err => console.error('Unable to submit question', err));
};

export default handlePostQuestion;