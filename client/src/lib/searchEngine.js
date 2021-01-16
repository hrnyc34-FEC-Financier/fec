const axios = require('axios');
const { API_TOKEN } = require('../../../env/config.js');
const Authorization = API_TOKEN;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc';

const searchEngine = {
  get: (endPoint, params = {}) => {
    axios
      .get(`${url}/${endPoint}`, {
        headers: { Authorization },
        params: params,
      })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  post: () => {
    // POST /reviews
    //   body: product_id + 8 parameters
    // POST /qa/questions
    //   body: product_id + 3 parameters
    // POST /qa/questions/:question_id/answers
  },
  put: () => {
    // PUT /reviews/:review_id/helpful
    // PUT /reviews/:review_id/report
    // PUT /qa/answers/:answer_id/helpful
    // PUT /qa/answers/:answer_id/report
    // PUT /qa/questions/:question_id/helpful
    // PUT /qa/questions/:question_id/report
  },
};
const id = 11001;
let endPoint = '';
searchEngine.get(`products/`, { page: 1, count: 10 });

// export default searchEngine;
