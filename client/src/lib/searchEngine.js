const axios = require('axios');
const { API_TOKEN } = require('../../../env/config.js');
const Authorization = API_TOKEN || process.env.API_KEY;

// TODO: consider deployment_ e.g. process.env.URL
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc';

const searchEngine = {

  get: (endPoint, params = {}) => {
    return axios.get(`${url}/${endPoint}`, {
      headers: { Authorization },
      params: params,
    });
  },

  post: (endPoint, data) => {
    return axios.post(`${url}/${endPoint}`, data, {
      headers: { Authorization },
    });
  },

  put: (endPoint) => {
    return axios.put(`${url}/${endPoint}`, {}, {
      headers: { Authorization },
    });
  },

};

export default searchEngine;
