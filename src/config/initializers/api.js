import axios from 'axios';

import { API_URL } from 'config/constants';

import requestInterceptors from '../request_interceptors';
import responseInterceptors from '../response_interceptors';

const configureApi = (store) => {
  axios.defaults.baseURL = API_URL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  // Setup interceptors
  axios.interceptors.request.use(function (config) {
    requestInterceptors.forEach(callback => {
      config = callback(config);
    });

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    responseInterceptors.forEach(callback => {
      response = callback(response);
    });

    return response;
  }, function (error) {
    return Promise.reject(error);
  });

};

export default configureApi;