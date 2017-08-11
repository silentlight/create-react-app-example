import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

export function setupOperationsTesting(host) {
  axios.defaults.baseURL = host;
  axios.defaults.adapter = httpAdapter;
}